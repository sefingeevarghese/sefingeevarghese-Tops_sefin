import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
    return (
        <div>
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
                                            <h1 className="display-3 text-white animated slideInDown">About My Plum Cake</h1>
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb justify-content-center">
                                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                                    <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Header End */}

                {/* Service Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-birthday-cake text-primary mb-4" />
                                        <h5 className="mb-3">Handcrafted Plum Cakes</h5>
                                        <p>Every cake is baked fresh daily using traditional recipes and the finest ingredients for a rich, moist flavor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-truck text-primary mb-4" />
                                        <h5 className="mb-3">Fast Delivery</h5>
                                        <p>Enjoy doorstep delivery of your favorite plum cakes, ensuring freshness and convenience for every celebration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-star text-primary mb-4" />
                                        <h5 className="mb-3">Premium Quality</h5>
                                        <p>We use only the best ingredients, ensuring every bite is packed with flavor and quality you can trust.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-heart text-primary mb-4" />
                                        <h5 className="mb-3">Customer Satisfaction</h5>
                                        <p>Your happiness is our priority. We strive to make every cake perfect for your special moments.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
                                <div className="position-relative h-100">
                                    <img className="img-fluid position-absolute w-100 h-100" src="img/about.webp" alt style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                                <h1 className="mb-4">Welcome to My Plum Cake</h1>
                                <p className="mb-4">Founded with a passion for baking, My Plum Cake is dedicated to bringing you the most delicious, handcrafted plum cakes. Our journey began in a small kitchen, where family recipes were perfected and shared with friends and neighbors. Today, we continue that tradition, baking each cake with love and care.</p>
                                <p className="mb-4">Our mission is to make every celebration sweeter with our signature plum cakes. Whether you're looking for a classic, chocolate, fruit & nut, or eggless variety, we have something for everyone. We believe in quality, freshness, and customer delight above all else.</p>
                                <ul className="mb-4">
                                    <li>Freshly baked daily with premium ingredients</li>
                                    <li>Wide range of flavors and custom options</li>
                                    <li>Fast, reliable delivery to your doorstep</li>
                                    <li>Perfect for birthdays, holidays, and special occasions</li>
                                </ul>
                                <a className="btn btn-primary py-3 px-5 mt-2" href="#">Order Your Cake</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Team Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Our Bakers</h6>
                            <h1 className="mb-5">Meet Our Expert Plum Cake Bakers</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item bg-light">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="img/team-1.jpg" alt />
                                    </div>
                                    <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                        <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4">
                                        <h5 className="mb-0">Priya Sharma</h5>
                                        <small>Head Baker & Recipe Creator</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item bg-light">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="img/team-2.jpg" alt />
                                    </div>
                                    <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                        <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4">
                                        <h5 className="mb-0">Rahul Mehta</h5>
                                        <small>Pastry Chef & Quality Expert</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item bg-light">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="img/team-3.jpg" alt />
                                    </div>
                                    <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                        <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4">
                                        <h5 className="mb-0">Anjali Verma</h5>
                                        <small>Decorations & Custom Orders</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item bg-light">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="img/team-4.jpg" alt />
                                    </div>
                                    <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                        <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4">
                                        <h5 className="mb-0">Vikram Singh</h5>
                                        <small>Delivery & Customer Care</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
            </div>




        </div>
    )
}

export default About
