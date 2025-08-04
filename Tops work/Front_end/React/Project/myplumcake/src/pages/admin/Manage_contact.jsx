import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from './Component/AdminSidebar';

function Manage_contact() {
  const [mydata, setData] = useState([]);
  const [viewContact, setViewContact] = useState(null);
  const [replyContact, setReplyContact] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('/contact');
      setData(res.data);
    } catch (err) {
      setData([]);
    }
  };

  const handleView = (contact) => {
    setViewContact(contact);
  };

  const handleReplyClick = (contact) => {
    setReplyContact(contact);
    setReplyMessage('');
  };

  const handleReplyChange = (e) => {
    setReplyMessage(e.target.value);
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`/contact/${replyContact.id}`, { status: 'replied', reply: replyMessage });
    setReplyContact(null);
    fetchContacts();
  };

  const handleCloseView = () => {
    setViewContact(null);
  };

  const handleCloseReply = () => {
    setReplyContact(null);
  };

  const deleteHandel = async (id) => {
    await axios.delete(`/contact/${id}`);
    fetchContacts();
  };

  function getStatusBadge(status) {
    switch (status) {
      case 'unread':
        return <span className="badge bg-warning">Unread</span>;
      case 'read':
        return <span className="badge bg-secondary">Read</span>;
      case 'replied':
        return <span className="badge bg-success">Replied</span>;
      default:
        return <span className="badge bg-light text-dark">Unknown</span>;
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Manage Contacts</h1>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mydata.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.subject}</td>
                    <td>
                      <div style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {contact.message}
                      </div>
                    </td>
                    <td>{contact.date}</td>
                    <td>{getStatusBadge(contact.status)}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => handleView(contact)}>
                        <i className="bi bi-eye"></i> View
                      </button>
                      <button className="btn btn-sm btn-success me-2" onClick={() => handleReplyClick(contact)}>
                        <i className="bi bi-reply"></i> Reply
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => deleteHandel(contact.id)}>
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* View Modal */}
          {viewContact && (
            <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Contact Details</h5>
                    <button type="button" className="btn-close" onClick={handleCloseView}></button>
                  </div>
                  <div className="modal-body">
                    <p><strong>Name:</strong> {viewContact.name}</p>
                    <p><strong>Email:</strong> {viewContact.email}</p>
                    <p><strong>Subject:</strong> {viewContact.subject}</p>
                    <p><strong>Message:</strong> {viewContact.message}</p>
                    <p><strong>Date:</strong> {viewContact.date}</p>
                    <p><strong>Status:</strong> {getStatusBadge(viewContact.status)}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseView}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Reply Modal */}
          {replyContact && (
            <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Reply to Contact</h5>
                    <button type="button" className="btn-close" onClick={handleCloseReply}></button>
                  </div>
                  <form onSubmit={handleReplySubmit}>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">Reply Message</label>
                        <textarea className="form-control" value={replyMessage} onChange={handleReplyChange} required />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={handleCloseReply}>Cancel</button>
                      <button type="submit" className="btn btn-success">Send Reply</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Manage_contact;