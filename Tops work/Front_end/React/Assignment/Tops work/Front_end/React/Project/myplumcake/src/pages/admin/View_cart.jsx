import React from 'react';
import { Link } from 'react-router-dom';

function View_cart() {
  // Sample data - replace with your actual data
  const cartItems = [
    {
      id: 1,
      name: 'Laptop Pro',
      price: 999.99,
      quantity: 1,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      quantity: 2,
      image: 'https://via.placeholder.com/50'
    }
  ];

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

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
            <h1 className="h2">Shopping Cart</h1>
          </div>

          <div className="row">
            {/* Cart Items Table */}
            <div className="col-md-8">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                            />
                            {item.name}
                          </div>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                          <div className="input-group" style={{ width: '120px' }}>
                            <button className="btn btn-outline-secondary btn-sm">-</button>
                            <input 
                              type="number" 
                              className="form-control form-control-sm text-center" 
                              value={item.quantity}
                              readOnly
                            />
                            <button className="btn btn-outline-secondary btn-sm">+</button>
                          </div>
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax (10%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <strong>Total:</strong>
                    <strong>${total.toFixed(2)}</strong>
                  </div>
                  <button className="btn btn-primary w-100">
                    <i className="bi bi-credit-card me-2"></i>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View_cart;