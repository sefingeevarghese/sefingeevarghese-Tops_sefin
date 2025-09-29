import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminLayout from './Component/AdminLayout';

function View_cart() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/orders');
      const data = res.data;
      if (data) {
        setOrders(data);
      } else {
        setOrders([]);
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
      toast.error('Error loading orders');
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const order = orders.find(o => o.id === orderId);
      await axios.put(`http://localhost:3001/orders/${orderId}`, {
        ...order,
        status: newStatus
      });
      toast.success('Order status updated successfully!');
      fetchOrders();
    } catch (error) {
      console.error('Error updating order status:', error);
      toast.error('Error updating order status');
    }
  };

  const deleteOrder = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        await axios.delete(`http://localhost:3001/orders/${orderId}`);
        toast.success('Order deleted successfully!');
        fetchOrders();
      } catch (error) {
        console.error('Error deleting order:', error);
        toast.error('Error deleting order');
      }
    }
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      'pending': 'bg-warning text-dark',
      'processing': 'bg-info',
      'shipped': 'bg-primary',
      'delivered': 'bg-success',
      'cancelled': 'bg-danger'
    };
    return <span className={`badge ${statusClasses[status] || 'bg-secondary'}`}>{status || 'Unknown'}</span>;
  };

  // Calculate totals
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + (parseFloat(order.total) || 0), 0);
  const pendingOrders = orders.filter(order => order.status === 'pending').length;
  const completedOrders = orders.filter(order => order.status === 'delivered').length;

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <i className="bi bi-cart-check me-2 text-primary"></i>
          Orders Management
        </h1>
        <button className="btn btn-outline-secondary" onClick={fetchOrders}>
          <i className="bi bi-arrow-clockwise me-2"></i>
          Refresh
        </button>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary h-100">
            <div className="card-body d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title mb-1">Total Orders</h5>
                <p className="card-text display-6 mb-0">{totalOrders}</p>
              </div>
              <div className="ms-3">
                <i className="bi bi-cart-check" style={{ fontSize: '3rem', opacity: 0.7 }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success h-100">
            <div className="card-body d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title mb-1">Total Revenue</h5>
                <p className="card-text display-6 mb-0">₹{totalRevenue.toFixed(2)}</p>
              </div>
              <div className="ms-3">
                <i className="bi bi-currency-rupee" style={{ fontSize: '3rem', opacity: 0.7 }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning h-100">
            <div className="card-body d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title mb-1">Pending Orders</h5>
                <p className="card-text display-6 mb-0">{pendingOrders}</p>
              </div>
              <div className="ms-3">
                <i className="bi bi-clock-history" style={{ fontSize: '3rem', opacity: 0.7 }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info h-100">
            <div className="card-body d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title mb-1">Completed</h5>
                <p className="card-text display-6 mb-0">{completedOrders}</p>
              </div>
              <div className="ms-3">
                <i className="bi bi-check-circle" style={{ fontSize: '3rem', opacity: 0.7 }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading orders...</p>
        </div>
      ) : (
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">
              <i className="bi bi-table me-2"></i>
              Orders List
              <span className="badge bg-primary ms-2">{orders.length} total</span>
            </h5>
          </div>
          <div className="card-body">
            {orders.length === 0 ? (
              <div className="text-center py-5">
                <i className="bi bi-cart-x" style={{ fontSize: '4rem', color: '#6c757d' }}></i>
                <h4 className="text-muted mt-3">No Orders Found</h4>
                <p className="text-muted">Orders will appear here when customers place them.</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Products</th>
                      <th>Total</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td><strong>#{order.id}</strong></td>
                        <td>
                          <div>
                            <strong>{order.customerName || 'N/A'}</strong><br/>
                            <small className="text-muted">{order.customerEmail || 'N/A'}</small>
                          </div>
                        </td>
                        <td>
                          <div style={{ maxWidth: '200px' }}>
                            {order.items ? (
                              order.items.map((item, index) => (
                                <div key={index} className="small">
                                  {item.name} x{item.quantity}
                                </div>
                              ))
                            ) : (
                              <span className="text-muted">No items</span>
                            )}
                          </div>
                        </td>
                        <td><strong className="text-success">₹{parseFloat(order.total || 0).toFixed(2)}</strong></td>
                        <td>{order.date ? new Date(order.date).toLocaleDateString() : 'N/A'}</td>
                        <td>{getStatusBadge(order.status)}</td>
                        <td>
                          <div className="dropdown">
                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                              Update Status
                            </button>
                            <ul className="dropdown-menu">
                              <li><button className="dropdown-item" onClick={() => updateOrderStatus(order.id, 'pending')}>Pending</button></li>
                              <li><button className="dropdown-item" onClick={() => updateOrderStatus(order.id, 'processing')}>Processing</button></li>
                              <li><button className="dropdown-item" onClick={() => updateOrderStatus(order.id, 'shipped')}>Shipped</button></li>
                              <li><button className="dropdown-item" onClick={() => updateOrderStatus(order.id, 'delivered')}>Delivered</button></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><button className="dropdown-item text-danger" onClick={() => updateOrderStatus(order.id, 'cancelled')}>Cancel</button></li>
                            </ul>
                          </div>
                          <button className="btn btn-sm btn-danger ms-2" onClick={() => deleteOrder(order.id)}>
                            <i className="bi bi-trash"></i>
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
      )}
    </AdminLayout>
  );
}

export default View_cart;