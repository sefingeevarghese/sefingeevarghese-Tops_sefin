import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse" style={{ minHeight: '100vh' }}>
          <div className="position-sticky pt-3">
            <div className="text-center mb-4">
              <h4 className="text-white">Admin Panel</h4>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/dashboard">
                  <i className="bi bi-speedometer2 me-2"></i>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/add_categories">
                  <i className="bi bi-plus-circle me-2"></i>
                  Add Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/manage_categories">
                  <i className="bi bi-list-ul me-2"></i>
                  Manage Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/add_product">
                  <i className="bi bi-plus-circle me-2"></i>
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/manage_product">
                  <i className="bi bi-box me-2"></i>
                  Manage Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/manage_order">
                  <i className="bi bi-cart me-2"></i>
                  Manage Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/view_cart">
                  <i className="bi bi-cart-check me-2"></i>
                  View Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/manage_customer">
                  <i className="bi bi-people me-2"></i>
                  Manage Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/manage_contact">
                  <i className="bi bi-envelope me-2"></i>
                  Manage Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>

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
                  <p className="card-text display-6">25</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card text-white bg-success">
                <div className="card-body">
                  <h5 className="card-title">Total Orders</h5>
                  <p className="card-text display-6">15</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card text-white bg-warning">
                <div className="card-body">
                  <h5 className="card-title">Total Customers</h5>
                  <p className="card-text display-6">50</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card text-white bg-danger">
                <div className="card-body">
                  <h5 className="card-title">Total Revenue</h5>
                  <p className="card-text display-6">$5000</p>
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
                <tr>
                  <td>#12345</td>
                  <td>John Doe</td>
                  <td>Product 1</td>
                  <td>$100</td>
                  <td><span className="badge bg-success">Completed</span></td>
                </tr>
                <tr>
                  <td>#12346</td>
                  <td>Jane Smith</td>
                  <td>Product 2</td>
                  <td>$200</td>
                  <td><span className="badge bg-warning">Pending</span></td>
                </tr>
                <tr>
                  <td>#12347</td>
                  <td>Mike Johnson</td>
                  <td>Product 3</td>
                  <td>$150</td>
                  <td><span className="badge bg-danger">Cancelled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;