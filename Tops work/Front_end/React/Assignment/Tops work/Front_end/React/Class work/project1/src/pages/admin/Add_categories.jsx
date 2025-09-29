import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './Component/AdminHeader'
import AdminFooter from './Component/AdminFooter'

function Add_categories() {
  const [category, setCategory] = useState({
    name: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Category Data:', category);
    // Add your category submission logic here
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
            <h1 className="h2">Add New Category</h1>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="categoryName" className="form-label">Category Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="categoryName"
                        value={category.name}
                        onChange={(e) => setCategory({...category, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="categoryDescription" className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        id="categoryDescription"
                        rows="3"
                        value={category.description}
                        onChange={(e) => setCategory({...category, description: e.target.value})}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Category</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminFooter/>
    </div>
  );
}

export default Add_categories;
