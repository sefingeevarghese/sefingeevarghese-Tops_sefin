import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import 'bootstrap-icons/font/bootstrap-icons.css';

function AdminSidebar() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Show confirmation dialog
    swal({
      title: "Are you sure?",
      text: "Do you want to logout from admin panel?",
      icon: "warning",
      buttons: ["Cancel", "Yes, Logout"],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('adminEmail');
        localStorage.removeItem('loginTime');
        
        swal("Success!", "Logged out successfully!", "success").then(() => {
          navigate('/admin-login');
        });
      }
    });
  };

  return (
    <div className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse" style={{ minHeight: 'calc(100vh - 56px)' }}>
      <div className="position-sticky pt-3">
        <div className="text-center mb-4 pb-3 border-bottom border-secondary">
          <i className="bi bi-person-circle text-white" style={{ fontSize: '3rem' }}></i>
          <h5 className="text-white mt-2 mb-0">Admin Panel</h5>
          <small className="text-muted">Management System</small>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item mb-1">
            <NavLink 
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center py-2 px-3 rounded ${
                  isActive ? 'bg-primary' : 'hover-bg-primary'
                }`
              } 
              to="/admin/dashboard"
            >
              <i className="bi bi-speedometer2 me-3"></i>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink 
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center py-2 px-3 rounded ${
                  isActive ? 'bg-primary' : 'hover-bg-primary'
                }`
              } 
              to="/admin/add-categories"
            >
              <i className="bi bi-plus-circle me-3"></i>
              Add Categories
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink 
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center py-2 px-3 rounded ${
                  isActive ? 'bg-primary' : 'hover-bg-primary'
                }`
              } 
              to="/admin/manage-categories"
            >
              <i className="bi bi-list-ul me-3"></i>
              Manage Categories
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink 
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center py-2 px-3 rounded ${
                  isActive ? 'bg-primary' : 'hover-bg-primary'
                }`
              } 
              to="/admin/add-product"
            >
              <i className="bi bi-plus-circle me-3"></i>
              Add Product
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink 
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center py-2 px-3 rounded ${
                  isActive ? 'bg-primary' : 'hover-bg-primary'
                }`
              } 
              to="/admin/manage-products"
            >
              <i className="bi bi-box me-3"></i>
              Manage Products
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink 
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center py-2 px-3 rounded ${
                  isActive ? 'bg-primary' : 'hover-bg-primary'
                }`
              } 
              to="/admin/view-cart"
            >
              <i className="bi bi-cart-check me-3"></i>
              View Cart
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink 
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center py-2 px-3 rounded ${
                  isActive ? 'bg-primary' : 'hover-bg-primary'
                }`
              } 
              to="/admin/manage-customers"
            >
              <i className="bi bi-people me-3"></i>
              Manage Customers
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink 
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center py-2 px-3 rounded ${
                  isActive ? 'bg-primary' : 'hover-bg-primary'
                }`
              } 
              to="/admin/manage-contacts"
            >
              <i className="bi bi-envelope me-3"></i>
              Manage Contacts
            </NavLink>
          </li>
        </ul>
        
        {/* Logout Button */}
        <div className="mt-4 pt-3 border-top border-secondary">
          <button 
            className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
        </div>
      </div>
      
      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .hover-bg-primary:hover {
          background-color: rgba(13, 110, 253, 0.1) !important;
        }
      `}</style>
    </div>
  );
}

export default AdminSidebar;