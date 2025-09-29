import React from 'react'
import { NavLink } from 'react-router-dom'

function Notfound() {
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
                 <NavLink to="/loginsignup" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3" /></NavLink>
              </div>
            </nav>
            {/* Navbar End */}
      
      
            {/* Header Start */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
              <div className="container py-5">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">Not Found</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">404</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            {/* Header End */}
      {/* 404 Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">Sorry, the page you are looking for does not exist in our plum cake website! Maybe go to our home page or try to use a search?</p>
              <a className="btn btn-primary rounded-pill py-3 px-5" href>Go Back To Home</a>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End */}


    </div>
  )
}

export default Notfound
