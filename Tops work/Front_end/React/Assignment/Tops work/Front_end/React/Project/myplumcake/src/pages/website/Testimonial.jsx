import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get('https://plumcake-bc095-default-rtdb.firebaseio.com/testimonials.json').then(res => {
            const data = res.data;
            if (data) {
                const testimonialsArray = Object.entries(data).map(([id, value]) => ({ id, ...value }));
                setTestimonials(testimonialsArray);
            } else {
                setTestimonials([]);
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
                            <h1 className="display-3 text-white animated slideInDown">Customer Reviews</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}

            {/* Testimonials Start */}
           <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="text-center">
                            <h6 className="section-title bg-white text-center text-primary px-3">Customer Reviews</h6>
                            <h1 className="mb-5">What Our Customers Say!</h1>
                        </div>
                        <div className="owl-carousel testimonial-carousel position-relative">
                            <div className="testimonial-item text-center">
                                <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{ width: 80, height: 80 }} />
                                <h5 className="mb-0">Olivia Carter</h5>
                                <p>Plum Cake Enthusiast</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">The plum cakes are absolutely delicious! Moist, flavorful, and perfect for every celebration. Highly recommended!</p>
                                </div>
                            </div>
                            <div className="testimonial-item text-center">
                                <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{ width: 80, height: 80 }} />
                                <h5 className="mb-0">Jack Thompson</h5>
                                <p>Profession</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">You can really taste the premium dry fruits. Great for gifting too!</p>
                                </div>
                            </div>
                            <div className="testimonial-item text-center">
                                <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{ width: 80, height: 80 }} />
                                <h5 className="mb-0">Daniel Hughes</h5>
                                <p>Profession</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">Loved the packaging and presentation. Felt festive from the moment I opened the box.</p>
                                </div>
                            </div>
                            <div className="testimonial-item text-center">
                                <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style={{ width: 80, height: 80 }} />
                                <h5 className="mb-0">Isabella Moore</h5>
                                <p>Profession</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">Tastes like a cake from a five-star bakery but at a great price.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* Testimonials End */}
        </div>
    );
}

export default Testimonial;
