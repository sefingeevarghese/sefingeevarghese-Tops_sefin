import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import 'bootstrap-icons/font/bootstrap-icons.css';

function AdminHeader() {
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand d-flex align-items-center px-3" to="/admin/dashboard">
                    <i className="bi bi-cake2 me-2 text-warning" style={{ fontSize: '1.5rem' }}></i>
                    <h4 className="m-0 text-white">Plum Cake Bliss Admin</h4>
                </NavLink>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <button 
                                className="nav-link dropdown-toggle text-white bg-transparent border-0" 
                                id="navbarDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-person-circle me-1"></i>
                                Admin
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink className="dropdown-item" to="/admin/dashboard">
                                        <i className="bi bi-speedometer2 me-2"></i>
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button className="dropdown-item" onClick={handleLogout}>
                                        <i className="bi bi-box-arrow-right me-2"></i>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default AdminHeader
