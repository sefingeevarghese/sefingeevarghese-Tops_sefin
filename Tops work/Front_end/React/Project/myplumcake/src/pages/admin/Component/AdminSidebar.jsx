import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse" style={{ minHeight: '100vh' }}>
      <div className="position-sticky pt-3">
        <div className="text-center mb-4">
          <h4 className="text-white">Admin Panel</h4>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/dashboard">
              <i className="bi bi-speedometer2 me-2"></i>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/add_categories">
              <i className="bi bi-plus-circle me-2"></i>
              Add Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/manage_categories">
              <i className="bi bi-list-ul me-2"></i>
              Manage Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/add_product">
              <i className="bi bi-plus-circle me-2"></i>
              Add Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/manage_product">
              <i className="bi bi-box me-2"></i>
              Manage Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/view_cart">
              <i className="bi bi-cart-check me-2"></i>
              View Cart
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/manage_customer">
              <i className="bi bi-people me-2"></i>
              Manage Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/manage_contact">
              <i className="bi bi-envelope me-2"></i>
              Manage Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminSidebar; 