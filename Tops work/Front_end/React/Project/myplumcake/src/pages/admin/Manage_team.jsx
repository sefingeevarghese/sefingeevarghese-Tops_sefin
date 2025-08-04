import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from './Component/AdminSidebar';

function Manage_team() {
  const [team, setTeam] = useState([]);
  const [editMember, setEditMember] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', role: '', image: '' });
  const [addForm, setAddForm] = useState({ name: '', role: '', image: '' });
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await axios.get('/team');
      setTeam(res.data);
    } catch (err) {
      setTeam([]);
    }
  };

  const handleEditClick = (m) => {
    setEditMember(m);
    setEditForm({ name: m.name, role: m.role, image: m.image });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`/team/${editMember.id}`, editForm);
    setEditMember(null);
    fetchTeam();
  };

  const handleEditCancel = () => {
    setEditMember(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/team/${id}`);
    fetchTeam();
  };

  const handleAddChange = (e) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/team', addForm);
    setAddForm({ name: '', role: '', image: '' });
    setShowAdd(false);
    fetchTeam();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Manage Team</h1>
            <button className="btn btn-primary" onClick={() => setShowAdd(true)}>Add Team Member</button>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {team.length === 0 ? (
                  <tr><td colSpan="4" className="text-center">No team members found.</td></tr>
                ) : team.map((m) => (
                  <tr key={m.id}>
                    <td>{m.name}</td>
                    <td>{m.role}</td>
                    <td>{m.image ? <img src={m.image} alt={m.name} style={{width: '50px', height: '50px', objectFit: 'cover'}} /> : '-'}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditClick(m)}>
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDelete(m.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Edit Modal */}
          {editMember && (
            <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Team Member</h5>
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
                        <label className="form-label">Image URL</label>
                        <input type="text" className="form-control" name="image" value={editForm.image} onChange={handleEditChange} />
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
                    <h5 className="modal-title">Add Team Member</h5>
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
                        <label className="form-label">Image URL</label>
                        <input type="text" className="form-control" name="image" value={addForm.image} onChange={handleAddChange} />
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

export default Manage_team; 