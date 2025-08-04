import React from 'react';
import { Link } from 'react-router-dom';

function Manage_order() {
  // Sample data - replace with your actual data
  const orders = [
    {
      id: 'ORD001',
      customer: 'John Doe',
      date: '2024-03-15',
      total: 1299.98,
      status: 'Delivered',
      items: 2
    },
    {
      id: 'ORD002',
      customer: 'Jane Smith',
      date: '2024-03-14',
      total: 279.98,
      status: 'Processing',
      items: 1
    },
    {
      id: 'ORD003',
      customer: 'Mike Johnson',
      date: '2024-03-13',
      total: 79.99,
      status: 'Pending',
      items: 1
    }
  ];

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
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.date}</td>
                    <td>{order.items}</td>
                    <td>${order.total.toFixed(2)}</td>
                    <td>{getStatusBadge(order.status)}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">
                        <i className="bi bi-eye"></i> View
                      </button>
                      <button className="btn btn-sm btn-success me-2">
                        <i className="bi bi-check-circle"></i> Update Status
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <i className="bi bi-trash"></i> Cancel
                      </button>
                    </td>
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

export default Manage_order;