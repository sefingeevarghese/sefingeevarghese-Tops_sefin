import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminLayout from './Component/AdminLayout';

function Manage_customer() {
  const [mydata, setData] = useState([]);
  const [viewCustomer, setViewCustomer] = useState(null);
  const [editCustomer, setEditCustomer] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', email: '', mobile: '', status: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/user');
      const data = res.data;
      if (data) {
        setData(data);
      } else {
        setData([]);
      }
    } catch (err) {
      console.error('Error fetching customers:', err);
      toast.error('Error loading customers');
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (customer) => {
    setViewCustomer(customer);
  };

  const handleEditClick = (customer) => {
    setEditCustomer(customer);
    setEditForm({
      name: customer.name || '',
      email: customer.email || '',
      mobile: customer.mobile || '',
      status: customer.status || ''
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/user/${editCustomer.id}`, editForm);
      toast.success('Customer updated successfully!');
      setEditCustomer(null);
      fetchCustomers();
    } catch (err) {
      console.error('Error updating customer:', err);
      toast.error('Error updating customer');
    }
  };

  const handleEditCancel = () => {
    setEditCustomer(null);
  };

  const handleCloseView = () => {
    setViewCustomer(null);
  };

  const deleteHandel = async (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        await axios.delete(`http://localhost:3001/user/${id}`);
        toast.success('Customer deleted successfully!');
        fetchCustomers();
      } catch (err) {
        console.error('Error deleting customer:', err);
        toast.error('Error deleting customer');
      }
    }
  };

  function getStatusBadge(status) {
    switch (status?.toLowerCase()) {
      case 'unblock':
        return <span className="badge bg-success">Active</span>;
      case 'block':
        return <span className="badge bg-danger">Blocked</span>;
      default:
        return <span className="badge bg-warning">Unknown</span>;
    }
  }

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Manage Customers</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <span className="badge bg-info">Total Customers: {mydata.length}</span>
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
          No customers found.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Status</th>
                <th>Admin Rights</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mydata.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.mobile}</td>
                  <td>{getStatusBadge(customer.status)}</td>
                  <td>
                    {customer.isAdmin ? (
                      <span className="badge bg-primary">Admin</span>
                    ) : (
                      <span className="badge bg-secondary">User</span>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary me-2" onClick={() => handleView(customer)}>
                      <i className="bi bi-eye"></i> View
                    </button>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEditClick(customer)}>
                      <i className="bi bi-pencil"></i> Edit
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteHandel(customer.id)}>
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
      {viewCustomer && (
        <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Customer Details</h5>
                <button type="button" className="btn-close" onClick={handleCloseView}></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <p><strong>ID:</strong> {viewCustomer.id}</p>
                    <p><strong>Name:</strong> {viewCustomer.name}</p>
                    <p><strong>Email:</strong> {viewCustomer.email}</p>
                  </div>
                  <div className="col-md-6">
                    <p><strong>Mobile:</strong> {viewCustomer.mobile}</p>
                    <p><strong>Status:</strong> {getStatusBadge(viewCustomer.status)}</p>
                    <p><strong>Admin Rights:</strong> {viewCustomer.isAdmin ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseView}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Edit Modal */}
      {editCustomer && (
        <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Customer</h5>
                <button type="button" className="btn-close" onClick={handleEditCancel}></button>
              </div>
              <form onSubmit={handleEditSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={editForm.name} onChange={handleEditChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={editForm.email} onChange={handleEditChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input type="text" className="form-control" name="mobile" value={editForm.mobile} onChange={handleEditChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select" name="status" value={editForm.status} onChange={handleEditChange}>
                      <option value="Unblock">Active (Unblock)</option>
                      <option value="Block">Blocked</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleEditCancel}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default Manage_customer;