import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from './Component/AdminSidebar';

function Manage_customer() {
  const [mydata, setData] = useState([]);
  const [viewCustomer, setViewCustomer] = useState(null);
  const [editCustomer, setEditCustomer] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', email: '', phone: '', orders: '', totalSpent: '', status: '' });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await axios.get('/user');
      setData(res.data);
    } catch (err) {
      setData([]);
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
      phone: customer.phone || '',
      orders: customer.orders || '',
      totalSpent: customer.totalSpent || '',
      status: customer.status || ''
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`/user/${editCustomer.id}`, editForm);
    setEditCustomer(null);
    fetchCustomers();
  };

  const handleEditCancel = () => {
    setEditCustomer(null);
  };

  const handleCloseView = () => {
    setViewCustomer(null);
  };

  const deleteHandel = async (id) => {
    await axios.delete(`/user/${id}`);
    fetchCustomers();
  };

  function getStatusBadge(status) {
    switch (status) {
      case 'active':
        return <span className="badge bg-success">Active</span>;
      case 'inactive':
        return <span className="badge bg-secondary">Inactive</span>;
      default:
        return <span className="badge bg-warning">Unknown</span>;
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Manage Customers</h1>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Orders</th>
                  <th>Total Spent</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mydata.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.orders}</td>
                    <td>${customer.totalSpent?.toFixed ? customer.totalSpent.toFixed(2) : customer.totalSpent}</td>
                    <td>{getStatusBadge(customer.status)}</td>
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
                    <p><strong>Name:</strong> {viewCustomer.name}</p>
                    <p><strong>Email:</strong> {viewCustomer.email}</p>
                    <p><strong>Phone:</strong> {viewCustomer.phone}</p>
                    <p><strong>Orders:</strong> {viewCustomer.orders}</p>
                    <p><strong>Total Spent:</strong> ${viewCustomer.totalSpent}</p>
                    <p><strong>Status:</strong> {getStatusBadge(viewCustomer.status)}</p>
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
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" name="phone" value={editForm.phone} onChange={handleEditChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Orders</label>
                        <input type="number" className="form-control" name="orders" value={editForm.orders} onChange={handleEditChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Total Spent</label>
                        <input type="number" className="form-control" name="totalSpent" value={editForm.totalSpent} onChange={handleEditChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select className="form-select" name="status" value={editForm.status} onChange={handleEditChange}>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
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
        </div>
      </div>
    </div>
  );
}

export default Manage_customer;