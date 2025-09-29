import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from './Component/AdminSidebar';

function Manage_order() {
  const [orders, setOrders] = useState([]);
  const [viewOrder, setViewOrder] = useState(null);
  const [statusUpdate, setStatusUpdate] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('/orders');
      setOrders(res.data);
    } catch (err) {
      setOrders([]);
    }
  };

  const handleView = (order) => {
    setViewOrder(order);
    setStatusUpdate(order.status);
  };

  const handleStatusChange = (e) => {
    setStatusUpdate(e.target.value);
  };

  const handleStatusUpdate = async () => {
    await axios.patch(`/orders/${viewOrder.id}`, { status: statusUpdate });
    setViewOrder(null);
    fetchOrders();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/orders/${id}`);
    fetchOrders();
  };

  const handleCloseModal = () => {
    setViewOrder(null);
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      'Delivered': 'bg-success',
      'Processing': 'bg-warning',
      'Pending': 'bg-info',
      'Cancelled': 'bg-danger'
    };
    return (
      <span className={`badge ${statusClasses[status] || 'bg-secondary'}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Manage Orders</h1>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr><td colSpan="7" className="text-center">No orders found.</td></tr>
                ) : orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id || '-'}</td>
                    <td>{order.customer || '-'}</td>
                    <td>{order.date || '-'}</td>
                    <td>{order.items !== undefined && order.items !== null ? order.items : '-'}</td>
                    <td>{order.total !== undefined && order.total !== null ? `$${order.total}` : '-'}</td>
                    <td>{getStatusBadge(order.status)}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => handleView(order)}>
                        <i className="bi bi-eye"></i> View
                      </button>
                      <button className="btn btn-sm btn-success me-2" onClick={() => handleView(order)}>
                        <i className="bi bi-check-circle"></i> Update Status
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDelete(order.id)}>
                        <i className="bi bi-trash"></i> Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* View/Update Modal */}
          {viewOrder && (
            <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Order Details</h5>
                    <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                  </div>
                  <div className="modal-body">
                    <p><strong>Order ID:</strong> {viewOrder.id}</p>
                    <p><strong>Customer:</strong> {viewOrder.customer}</p>
                    <p><strong>Date:</strong> {viewOrder.date}</p>
                    <p><strong>Items:</strong> {viewOrder.items}</p>
                    <p><strong>Total:</strong> ${viewOrder.total}</p>
                    <p><strong>Status:</strong></p>
                    <select className="form-select" value={statusUpdate} onChange={handleStatusChange}>
                      <option value="Delivered">Delivered</option>
                      <option value="Processing">Processing</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                    <button type="button" className="btn btn-success" onClick={handleStatusUpdate}>Update Status</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Manage_order;