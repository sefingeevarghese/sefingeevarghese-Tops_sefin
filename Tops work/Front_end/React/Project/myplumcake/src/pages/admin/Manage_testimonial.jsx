import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from './Component/AdminSidebar';

function Manage_testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [editTestimonial, setEditTestimonial] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', role: '', message: '' });
  const [addForm, setAddForm] = useState({ name: '', role: '', message: '' });
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get('/testimonials');
      setTestimonials(res.data);
    } catch (err) {
      setTestimonials([]);
    }
  };

  const handleEditClick = (t) => {
    setEditTestimonial(t);
    setEditForm({ name: t.name, role: t.role, message: t.message });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`/testimonials/${editTestimonial.id}`, editForm);
    setEditTestimonial(null);
    fetchTestimonials();
  };

  const handleEditCancel = () => {
    setEditTestimonial(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/testimonials/${id}`);
    fetchTestimonials();
  };

  const handleAddChange = (e) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/testimonials', addForm);
    setAddForm({ name: '', role: '', message: '' });
    setShowAdd(false);
    fetchTestimonials();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Manage Testimonials</h1>
            <button className="btn btn-primary" onClick={() => setShowAdd(true)}>Add Testimonial</button>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Message</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.length === 0 ? (
                  <tr><td colSpan="4" className="text-center">No testimonials found.</td></tr>
                ) : testimonials.map((t) => (
                  <tr key={t.id}>
                    <td>{t.name}</td>
                    <td>{t.role}</td>
                    <td>{t.message}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditClick(t)}>
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDelete(t.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Edit Modal */}
          {editTestimonial && (
            <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Testimonial</h5>
                    <button type="button" className="btn-close" onClick={handleEditCancel}></button>
                  </div>
                  <form onSubmit={handleEditSubmit}>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={editForm.name} onChange={handleEditChange} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Role</label>
                        <input type="text" className="form-control" name="role" value={editForm.role} onChange={handleEditChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" name="message" value={editForm.message} onChange={handleEditChange} required />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={handleEditCancel}>Cancel</button>
                      <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          {/* Add Modal */}
          {showAdd && (
            <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add Testimonial</h5>
                    <button type="button" className="btn-close" onClick={() => setShowAdd(false)}></button>
                  </div>
                  <form onSubmit={handleAddSubmit}>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={addForm.name} onChange={handleAddChange} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Role</label>
                        <input type="text" className="form-control" name="role" value={addForm.role} onChange={handleAddChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" name="message" value={addForm.message} onChange={handleAddChange} required />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setShowAdd(false)}>Cancel</button>
                      <button type="submit" className="btn btn-primary">Add</button>
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

export default Manage_testimonial; 