import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Services() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://plumcake-bc095-default-rtdb.firebaseio.com/categories.json').then(res => {
            const data = res.data;
            if (data) {
                const categoriesArray = Object.entries(data).map(([id, value]) => ({ id, ...value }));
                setCategories(categoriesArray);
            } else {
                setCategories([]);
            }
        });
        // Initialize testimonial carousel after component mount
        if (window.jQuery) {
            window.jQuery(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                margin: 24,
                dots: true,
                loop: true,
                nav: false,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    992: { items: 3 }
                }
            });
        }
    }, []);
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
                              <h1 className="display-3 text-white animated slideInDown">Our Plum Cake Varieties</h1>
                              <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                  <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                  <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                  <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                                </ol>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Header End */}
                {/* Categories Start */}
                <div className="container-xxl py-5 category">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
                            <h1 className="mb-5">Plum Cake Categories</h1>
                        </div>
                        <div className="row g-3">
                            {categories.length === 0 ? (
                                <div className="text-center">No categories found.</div>
                            ) : categories.map((cat, idx) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={cat.id || idx}>
                                    <div className="card h-100">
                                        <img src={cat.image || 'img/cat-1.jpg'} className="card-img-top" alt={cat.name} style={{height: '200px', objectFit: 'cover'}} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{cat.name}</h5>
                                            <p className="card-text">{cat.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Categories End */}
                {/* Services Start */}
                 <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Plum Cakes</h6>
                            <h1 className="mb-5">Popular Plum Cakes</h1>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="course-item bg-light">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src="img/course-1.jpg" alt="Classic Plum Cake" />
                                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 pb-0">
                                        <h3 className="mb-0">$149.00</h3>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <h5 className="mb-4">Traditional Christmas Plum Cake</h5>
                                    </div>
                                    <div className="d-flex border-top">
                                   <small className="flex-fill text-center border-end py-2"><span className="me-2" role="img" aria-label="chef">👨‍🍳</span>Chef Berry Whip</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fas fa-clock text-primary me-2"></i> 1.49 Hrs</small>
                                    <small className="flex-fill text-center py-2"><i className="fas fa-user text-primary me-2"></i>30 Customers</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="course-item bg-light">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src="img/course-2.jpg" alt="Chocolate Plum Cake" />
                                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 pb-0">
                                        <h3 className="mb-0">$200.00</h3>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <h5 className="mb-4">Plum Cake with Icing / Frosting</h5>
                                    </div>
                                    <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><span className="me-2" role="img" aria-label="chef">👨‍🍳</span>Baker Ella</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fas fa-clock text-primary me-2"></i> 1.49 Hrs</small>
                                    <small className="flex-fill text-center py-2"><i className="fas fa-user text-primary me-2"></i>30 Customers</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="course-item bg-light">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src="img/course-3.jpg" alt="Fruit & Nut Plum Cake" />
                                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 pb-0">
                                        <h3 className="mb-0">$350.00</h3>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <h5 className="mb-4">Whole Wheat or Healthy Plum Cake</h5>
                                    </div>
                                    <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><span className="me-2" role="img" aria-label="chef">👨‍🍳</span>Chef Plumee</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fas fa-clock text-primary me-2"></i> 1.49 Hrs</small>
                                    <small className="flex-fill text-center py-2"><i className="fas fa-user text-primary me-2"></i>30 Customers</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services End */}
                {/* Testimonial Start */}
                 <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-primary px-3">Customer Reviews</h6>
                        <h1 className="mb-5">What Our Customers Say!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel position-relative">
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{ width: 80, height: 80 }} />
                            <h5 className="mb-0">Cake Lover</h5>
                            <p>Plum Cake Enthusiast</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">The plum cakes are absolutely delicious! Moist, flavorful, and perfect for every celebration. Highly recommended!</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{ width: 80, height: 80 }} />
                            <h5 className="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">You can really taste the premium dry fruits. Great for gifting too!</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{ width: 80, height: 80 }} />
                            <h5 className="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">Loved the packaging and presentation. Felt festive from the moment I opened the box.</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style={{ width: 80, height: 80 }} />
                            <h5 className="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">Tastes like a cake from a five-star bakery but at a great price.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {/* Testimonial End */}
            </div>


        </div>
    )
}

export default Services
