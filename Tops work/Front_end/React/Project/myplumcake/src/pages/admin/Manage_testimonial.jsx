import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminLayout from './Component/AdminLayout';

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
      const res = await axios.get('http://localhost:3001/testimonials');
      const data = res.data;
      if (data) {
        setTestimonials(data);
      } else {
        setTestimonials([]);
      }
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      toast.error('Error loading testimonials');
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
    try {
      await axios.put(`http://localhost:3001/testimonials/${editTestimonial.id}`, { ...editForm, id: editTestimonial.id });
      toast.success('Testimonial updated successfully!');
      setEditTestimonial(null);
      fetchTestimonials();
    } catch (error) {
      console.error('Error updating testimonial:', error);
      toast.error('Error updating testimonial');
    }
  };

  const handleEditCancel = () => {
    setEditTestimonial(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await axios.delete(`http://localhost:3001/testimonials/${id}`);
        toast.success('Testimonial deleted successfully!');
        fetchTestimonials();
      } catch (error) {
        console.error('Error deleting testimonial:', error);
        toast.error('Error deleting testimonial');
      }
    }
  };

  const handleAddChange = (e) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/testimonials', {
        ...addForm,
        id: Date.now().toString()
      });
      toast.success('Testimonial added successfully!');
      setAddForm({ name: '', role: '', message: '' });
      setShowAdd(false);
      fetchTestimonials();
    } catch (error) {
      console.error('Error adding testimonial:', error);
      toast.error('Error adding testimonial');
    }
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <i className="bi bi-chat-quote me-2 text-primary"></i>
          Manage Testimonials
        </h1>
        <button className="btn btn-primary" onClick={() => setShowAdd(true)}>
          <i className="bi bi-plus-circle me-2"></i>
          Add Testimonial
        </button>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">
            <i className="bi bi-table me-2"></i>
            Customer Testimonials
            <span className="badge bg-primary ms-2">{testimonials.length} total</span>
          </h5>
        </div>
        <div className="card-body">
          {testimonials.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-chat-quote" style={{ fontSize: '4rem', color: '#6c757d' }}></i>
              <h4 className="text-muted mt-3">No Testimonials Found</h4>
              <p className="text-muted">Add customer testimonials to display them here.</p>
              <button className="btn btn-primary" onClick={() => setShowAdd(true)}>
                <i className="bi bi-plus-circle me-2"></i>
                Add First Testimonial
              </button>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Message</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((t) => (
                    <tr key={t.id}>
                      <td><strong>{t.name}</strong></td>
                      <td><span className="badge bg-info">{t.role}</span></td>
                      <td>
                        <div style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {t.message}
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-warning me-2" onClick={() => handleEditClick(t)}>
                          <i className="bi bi-pencil"></i> Edit
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(t.id)}>
                          <i className="bi bi-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
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
    </AdminLayout>
  );
}

export default Manage_testimonial; 