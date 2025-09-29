import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminLayout from './Component/AdminLayout';

function Manage_contact() {
  const [mydata, setData] = useState([]);
  const [viewContact, setViewContact] = useState(null);
  const [replyContact, setReplyContact] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/contact');
      const data = res.data;
      if (data) {
        setData(data);
      } else {
        setData([]);
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
      toast.error('Error loading contacts');
      setData([]);
    } finally {
      setLoading(false);
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
    try {
      await axios.patch(`http://localhost:3001/contact/${replyContact.id}`, { 
        status: 'replied', 
        reply: replyMessage,
        repliedAt: new Date().toISOString()
      });
      toast.success('Reply sent successfully!');
      setReplyContact(null);
      fetchContacts();
    } catch (err) {
      console.error('Error sending reply:', err);
      toast.error('Error sending reply');
    }
  };

  const handleCloseView = () => {
    setViewContact(null);
  };

  const handleCloseReply = () => {
    setReplyContact(null);
  };

  const deleteHandel = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await axios.delete(`http://localhost:3001/contact/${id}`);
        toast.success('Contact deleted successfully!');
        fetchContacts();
      } catch (err) {
        console.error('Error deleting contact:', err);
        toast.error('Error deleting contact');
      }
    }
  };

  function getStatusBadge(status) {
    switch (status?.toLowerCase()) {
      case 'unread':
        return <span className="badge bg-warning">Unread</span>;
      case 'read':
        return <span className="badge bg-info">Read</span>;
      case 'replied':
        return <span className="badge bg-success">Replied</span>;
      default:
        return <span className="badge bg-secondary">New</span>;
    }
  }

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Manage Contacts</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <span className="badge bg-info">Total Contacts: {mydata.length}</span>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : mydata.length === 0 ? (
        <div className="alert alert-info" role="alert">
          <i className="bi bi-info-circle me-2"></i>
          No contacts found.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
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
                  <td>{contact.subect || contact.subject || 'N/A'}</td>
                  <td>
                    <div style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {contact.msg || contact.message || 'N/A'}
                    </div>
                  </td>
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
      )}
      {/* View Modal */}
      {viewContact && (
        <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Details</h5>
                <button type="button" className="btn-close" onClick={handleCloseView}></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <p><strong>ID:</strong> {viewContact.id}</p>
                    <p><strong>Name:</strong> {viewContact.name}</p>
                    <p><strong>Email:</strong> {viewContact.email}</p>
                  </div>
                  <div className="col-md-6">
                    <p><strong>Subject:</strong> {viewContact.subect || viewContact.subject || 'N/A'}</p>
                    <p><strong>Status:</strong> {getStatusBadge(viewContact.status)}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p><strong>Message:</strong></p>
                  <div className="p-3 bg-light rounded">
                    {viewContact.msg || viewContact.message || 'No message content'}
                  </div>
                </div>
                {viewContact.reply && (
                  <div className="mt-3">
                    <p><strong>Admin Reply:</strong></p>
                    <div className="p-3 bg-success bg-opacity-10 rounded">
                      {viewContact.reply}
                    </div>
                    {viewContact.repliedAt && (
                      <small className="text-muted">Replied on: {new Date(viewContact.repliedAt).toLocaleString()}</small>
                    )}
                  </div>
                )}
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
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reply to Contact</h5>
                <button type="button" className="btn-close" onClick={handleCloseReply}></button>
              </div>
              <form onSubmit={handleReplySubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <p><strong>Contact from:</strong> {replyContact.name} ({replyContact.email})</p>
                    <p><strong>Subject:</strong> {replyContact.subect || replyContact.subject || 'N/A'}</p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label"><strong>Original Message:</strong></label>
                    <div className="p-3 bg-light rounded">
                      {replyContact.msg || replyContact.message || 'No message content'}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label"><strong>Your Reply:</strong></label>
                    <textarea 
                      className="form-control" 
                      rows="5"
                      value={replyMessage} 
                      onChange={handleReplyChange} 
                      placeholder="Type your reply message here..."
                      required 
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseReply}>Cancel</button>
                  <button type="submit" className="btn btn-success">
                    <i className="bi bi-send me-2"></i>Send Reply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default Manage_contact;