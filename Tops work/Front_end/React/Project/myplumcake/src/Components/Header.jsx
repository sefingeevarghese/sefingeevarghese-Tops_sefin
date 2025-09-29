import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useCart } from './CartContext';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const navigate = useNavigate();
    const { cart } = useCart();

    useEffect(() => {
        // Check if user is logged in
        const checkLoginStatus = () => {
            const userId = localStorage.getItem('u_id');
            const name = localStorage.getItem('u_name');
            const adminStatus = localStorage.getItem('isAdmin');

            if (userId) {
                setIsLoggedIn(true);
                setUserName(name || 'User');
                setIsAdmin(adminStatus === 'true');
            } else {
                setIsLoggedIn(false);
                setUserName('');
                setIsAdmin(false);
            }
        };

        // Check initial state
        checkLoginStatus();

        // Listen for storage changes (when user logs in/out in another tab)
        const handleStorageChange = (e) => {
            if (e.key === 'u_id' || e.key === 'u_name' || e.key === 'isAdmin') {
                checkLoginStatus();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Also listen for custom events (for same-tab login/logout)
        const handleLoginStateChange = () => {
            checkLoginStatus();
        };

        window.addEventListener('loginStateChanged', handleLoginStateChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('loginStateChanged', handleLoginStateChange);
        };
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown')) {
                setShowUserDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const logout = () => {
        // Show confirmation dialog
        swal({
            title: "Are you sure?",
            text: "Do you want to logout?",
            icon: "warning",
            buttons: ["Cancel", "Yes, Logout"],
            dangerMode: true,
        }).then((willLogout) => {
            if (willLogout) {
                // Clear all localStorage items
                localStorage.removeItem('u_id');
                localStorage.removeItem('u_name');
                localStorage.removeItem('u_email');
                localStorage.removeItem('u_mobile');
                localStorage.removeItem('isAdmin');
                localStorage.removeItem('adminEmail');
                localStorage.removeItem('loginTime');
                
                // Update state
                setIsLoggedIn(false);
                setUserName('');
                setIsAdmin(false);
                
                // Dispatch custom event to notify other components
                window.dispatchEvent(new Event('loginStateChanged'));
                
                swal("Good job!", "Logout Success!", "success");
                navigate('/');
            }
        });
  };

  return (
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary">
                    <i className="fa fa-birthday-cake me-3" />
                    Plum Cake Bliss
                </h2>
            </Link>
            
            <button 
                type="button" 
                className="navbar-toggler me-4" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarCollapse"
            >
          <span className="navbar-toggler-icon" />
        </button>
            
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
            <NavLink to="/Services" className="nav-item nav-link">Services</NavLink>
                    
            <div className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ background: 'none', border: 'none', color: 'inherit' }}>
                            Pages
                        </button>
              <div className="dropdown-menu fade-down m-0">
                <NavLink to="/ourteam" className="dropdown-item">Our Team</NavLink>
                <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                            <NavLink to="/contact" className="dropdown-item">Contact</NavLink>
              </div>
            </div>
                    
          </div>
                
                <div className="d-flex align-items-center px-4 px-lg-5">
                    {isLoggedIn ? (
                        <div className="d-flex align-items-center">
                            {/* Cart Icon */}
                            <div className="me-4">
                                <Link 
                                    to="/cart" 
                                    className="btn btn-outline-primary position-relative"
                                    style={{ borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                    {cart.totalItems > 0 && (
                                        <span 
                                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                            style={{ fontSize: '0.7rem' }}
                                        >
                                            {cart.totalItems}
                                        </span>
                                    )}
                                </Link>
                            </div>
                            <div className="dropdown me-3" style={{ position: 'relative' }}>
                                <button 
                                    className="btn btn-outline-primary dropdown-toggle" 
                                    type="button" 
                                    onClick={() => {
                                        console.log('User dropdown clicked, current state:', showUserDropdown);
                                        setShowUserDropdown(!showUserDropdown);
                                    }}
                                >
                                    <i className="fa fa-user me-2"></i>
                                    {userName}
                                </button>
                                {showUserDropdown && (
                                    <ul className="dropdown-menu" style={{ 
                                        position: 'absolute', 
                                        top: '100%', 
                                        right: '0', 
                                        zIndex: 1000,
                                        display: 'block',
                                        minWidth: '200px',
                                        backgroundColor: 'white',
                                        border: '1px solid #dee2e6',
                                        borderRadius: '0.375rem',
                                        boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.175)',
                                        padding: '0.5rem 0',
                                        margin: '0.125rem 0 0'
                                    }}>
                                        <li>
                                            <Link 
                                                className="dropdown-item" 
                                                to="/cart"
                                                style={{ 
                                                    display: 'block', 
                                                    padding: '0.25rem 1rem', 
                                                    color: '#212529', 
                                                    textDecoration: 'none',
                                                    transition: 'background-color 0.15s ease-in-out'
                                                }}
                                                onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                                onClick={() => setShowUserDropdown(false)}
                                            >
                                                <i className="fa fa-shopping-cart me-2"></i>
                                                My Cart ({cart.totalItems})
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                className="dropdown-item" 
                                                to="/profile"
                                                style={{ 
                                                    display: 'block', 
                                                    padding: '0.25rem 1rem', 
                                                    color: '#212529', 
                                                    textDecoration: 'none',
                                                    transition: 'background-color 0.15s ease-in-out'
                                                }}
                                                onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                                onClick={() => setShowUserDropdown(false)}
                                            >
                                                <i className="fa fa-user-circle me-2"></i>
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                className="dropdown-item" 
                                                to="/orders"
                                                style={{ 
                                                    display: 'block', 
                                                    padding: '0.25rem 1rem', 
                                                    color: '#212529', 
                                                    textDecoration: 'none' 
                                                }}
                                                onClick={() => setShowUserDropdown(false)}
                                            >
                                                <i className="fa fa-shopping-bag me-2"></i>
                                                My Orders
                                            </Link>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <button 
                                                className="dropdown-item text-danger" 
                                                onClick={() => {
                                                    setShowUserDropdown(false);
                                                    logout();
                                                }}
                                                style={{ 
                                                    display: 'block', 
                                                    width: '100%', 
                                                    padding: '0.25rem 1rem', 
                                                    color: '#dc3545', 
                                                    background: 'none', 
                                                    border: 'none', 
                                                    textAlign: 'left',
                                                    transition: 'background-color 0.15s ease-in-out'
                                                }}
                                                onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                            >
                                                <i className="fa fa-sign-out-alt me-2"></i>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                )}
              </div>
            </div>
          ) : (
                        <div className="d-flex gap-2">
                            <NavLink 
                                to="/login" 
                                className="btn btn-outline-primary py-1 px-3"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    lineHeight: '1',
                                    minHeight: '38px'
                                }}
                            >
                                Login
                            </NavLink>
                            <NavLink 
                                to="/signup" 
                                className="btn btn-primary py-1 px-3"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    lineHeight: '1',
                                    minHeight: '38px'
                                }}
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    )}
                </div>
        </div>
      </nav>
    );
}

export default Header;
