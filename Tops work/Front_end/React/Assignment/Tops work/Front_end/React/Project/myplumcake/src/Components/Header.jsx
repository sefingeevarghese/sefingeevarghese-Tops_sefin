import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  // Always get the latest user info from localStorage on every render
  const user = (() => {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  })();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    window.location.reload();
  };

  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary"><i className="fa fa-birthday-cake me-3" />My Plum Cake</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
            <NavLink to="/Services" className="nav-item nav-link">Services</NavLink>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu fade-down m-0">
                <NavLink to="/ourteam" className="dropdown-item">Our Team</NavLink>
                <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                <NavLink to="/notfound" className="dropdown-item">Notfound</NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
          </div>
          {user ? (
            <div className="d-flex align-items-center gap-3">
              <div className="text-primary fw-bold text-end" style={{lineHeight:1}}>
                <div>{user.name}</div>
                <div style={{fontSize:'0.9em'}}>{user.email}</div>
              </div>
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <NavLink to="/loginsignup" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3" /></NavLink>
          )}
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  )
}

export default Header
