import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './Component/AdminSidebar';

function Dashboard() {
  const [stats, setStats] = useState({
    products: 5,
    orders: 12,
    customers: 8,
    revenue: 1500
  });
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    // Demo data for recent orders
    setRecentOrders([
      { id: 101, customer: 'John Doe', product: 'Chocolate Cake', total: 200, status: 'Completed' },
      { id: 102, customer: 'Jane Smith', product: 'Vanilla Cake', total: 150, status: 'Pending' },
      { id: 103, customer: 'Alice Brown', product: 'Red Velvet Cake', total: 300, status: 'Delivered' }
    ]);
  }, []);

  const getStatusBadge = (status) => {
    const statusClasses = {
      'Completed': 'bg-success',
      'Pending': 'bg-warning',
      'Cancelled': 'bg-danger',
      'Processing': 'bg-info',
      'Delivered': 'bg-success',
    };
    return <span className={`badge ${statusClasses[status] || 'bg-secondary'}`}>{status}</span>;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
            </div>
          </div>

          {/* Dashboard Cards */}
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card text-white bg-primary">
                <div className="card-body">
                  <h5 className="card-title">Total Products</h5>
                  <p className="card-text display-6">{stats.products}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card text-white bg-success">
                <div className="card-body">
                  <h5 className="card-title">Total Orders</h5>
                  <p className="card-text display-6">{stats.orders}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card text-white bg-warning">
                <div className="card-body">
                  <h5 className="card-title">Total Customers</h5>
                  <p className="card-text display-6">{stats.customers}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card text-white bg-danger">
                <div className="card-body">
                  <h5 className="card-title">Total Revenue</h5>
                  <p className="card-text display-6">${stats.revenue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="table-responsive">
            <h3 className="mb-3">Recent Orders</h3>
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>${order.total}</td>
                    <td>{getStatusBadge(order.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;