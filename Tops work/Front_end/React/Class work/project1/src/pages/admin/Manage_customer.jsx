import React from 'react';
import { Link } from 'react-router-dom';

function Manage_customer() {
  // Sample data - replace with your actual data
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234-567-8901',
      orders: 5,
      totalSpent: 1299.98,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234-567-8902',
      orders: 3,
      totalSpent: 479.97,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1 234-567-8903',
      orders: 1,
      totalSpent: 79.99,
      status: 'Inactive'
    }
  ];

  const getStatusBadge = (status) => {
    return (
      <span className={`badge ${status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
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
            <h1 className="h2">Manage Customers</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  <i className="bi bi-download me-1"></i>
                  Export
                </button>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  <i className="bi bi-printer me-1"></i>
                  Print
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search customers..."
                />
                <button className="btn btn-outline-secondary" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end">
                <select className="form-select" style={{ width: 'auto' }}>
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>

          {/* Customers Table */}
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
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.orders}</td>
                    <td>${customer.totalSpent.toFixed(2)}</td>
                    <td>{getStatusBadge(customer.status)}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">
                        <i className="bi bi-eye"></i> View
                      </button>
                      <button className="btn btn-sm btn-warning me-2">
                        <i className="bi bi-pencil"></i> Edit
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <nav aria-label="Page navigation" className="mt-4">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">Previous</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Manage_customer;