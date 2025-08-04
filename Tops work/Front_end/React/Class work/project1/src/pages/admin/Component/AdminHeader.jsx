import React from 'react'
import { NavLink } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'

function AdminHeader() {
    return (
        <div>
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <div className="container-fluid">
                    <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                        <h2 className="m-0 text-primary"><i className="fas fa-book me-3"></i>eLEARNING</h2>
                    </a>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto p-4 p-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/manage_categories">Manage Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/manage_product">Manage Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/manage_order">Manage Orders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/view_cart">View Cart</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/manage_customer">Manage Customers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/manage_contact">Manage Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
        </div>
    )
}

export default AdminHeader
