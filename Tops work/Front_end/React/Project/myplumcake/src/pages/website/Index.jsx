import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Index() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch categories and products from Firebase
        axios.get('https://plumcake-bc095-default-rtdb.firebaseio.com/categories.json').then(res => {
            const data = res.data;
            if (data) {
                const categoriesArray = Object.entries(data).map(([id, value]) => ({ id, ...value }));
                setCategories(categoriesArray);
            } else {
                setCategories([]);
            }
        });
        axios.get('https://plumcake-bc095-default-rtdb.firebaseio.com/products.json').then(res => {
            const data = res.data;
            if (data) {
                const productsArray = Object.entries(data).map(([id, value]) => ({ id, ...value }));
                setProducts(productsArray);
            } else {
                setProducts([]);
            }
        });

        // Initialize carousels after component mount
        if (window.jQuery) {
            window.jQuery(".header-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                items: 1,
                dots: false,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ]
            });
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
                {/* Carousel Start */}
                <div className="container-fluid p-0 mb-5">
                    <div className="owl-carousel header-carousel position-relative">
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src="img/carousel-1.jpg" alt />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-sm-10 col-lg-8">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Delicious Plum Cakes</h5>
                                            <h1 className="display-3 text-white animated slideInDown">The Best Plum Cake Shop Online</h1>
                                            <p className="fs-5 text-white mb-4 pb-2">Discover our range of rich, moist, and flavorful plum cakes, baked fresh with the finest ingredients. Perfect for every celebration and sweet craving!</p>
                                            <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Explore Cakes</a>
                                            <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Order Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src="img/carousel-2.jpg" alt />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-sm-10 col-lg-8">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Premium Plum Cakes</h5>
                                            <h1 className="display-3 text-white animated slideInDown">Order Plum Cakes Online, Freshly Baked</h1>
                                            <p className="fs-5 text-white mb-4 pb-2">Enjoy the taste of tradition with our signature plum cakes, made with love and delivered to your doorstep.</p>
                                            <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">See Varieties</a>
                                            <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Carousel End */}
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
                {/* Categories Start */}
                <div className="container-xxl py-5 category">
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
                {/* Categories End */}

                {/* Products Start */}
                <div className="container-xxl py-5">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Products</h6>
                        <h1 className="mb-5">Our Plum Cakes</h1>
                    </div>
                    <div className="row g-3">
                        {products.length === 0 ? (
                            <div className="text-center">No products found.</div>
                        ) : products.map((prod, idx) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={prod.id || idx}>
                                <div className="card h-100">
                                    <img src={prod.image || 'img/cat-1.jpg'} className="card-img-top" alt={prod.name} style={{height: '200px', objectFit: 'cover'}} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{prod.name}</h5>
                                        <p className="card-text">{prod.description}</p>
                                        <p className="card-text fw-bold text-primary">${prod.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Products End */}
                {/* Services Start */}
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
                {/* Services End */}
                {/* Team Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Our Bakers</h6>
                            <h1 className="mb-5">Expert Plum Cake Bakers</h1>
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
                                        <h5 className="mb-0">Nigella Lawson</h5>
                                        <small>Plum Cake Specialist</small>
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
                                        <h5 className="mb-0">Mary Berry </h5>
                                        <small>Plum Cake Specialist</small>
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
                                        <h5 className="mb-0">Delia Smith</h5>
                                        <small>Plum Cake Specialist</small>
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
                                        <h5 className="mb-0">Dominique Ansel</h5>
                                        <small>Plum Cake Specialist</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
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
                {/* Testimonial End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>

        </div>
    )
}

export default Index
