import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../Components/CartContext';
import { toast } from 'react-toastify';
import '../../Components/CategoryProductHover.css';

function Index() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { addToCart, isInCart } = useCart();

    useEffect(() => {
        // Fetch categories and products from local JSON server
        axios.get('http://localhost:3001/categories').then(res => {
            const data = res.data;
            if (data) {
                setCategories(data);
            } else {
                setCategories([]);
            }
        }).catch(error => {
            console.error('Error fetching categories:', error);
            setCategories([]);
        });
        
        axios.get('http://localhost:3001/products').then(res => {
            const data = res.data;
            if (data) {
                setProducts(data);
            } else {
                setProducts([]);
            }
        }).catch(error => {
            console.error('Error fetching products:', error);
            setProducts([]);
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

    // Handle category click to filter products
    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
        const filtered = products.filter(product => product.category === categoryName);
        setFilteredProducts(filtered);
    };

    // Reset category filter
    const resetCategoryFilter = () => {
        setSelectedCategory(null);
        setFilteredProducts([]);
    };

    return (
        <div>
                {/* Carousel Start */}
                <div className="container-fluid p-0 mb-5">
                    <div className="owl-carousel header-carousel position-relative">
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid w-100" src="img/carousel-1.jpg" alt="" style={{height: '500px', objectFit: 'cover'}} />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-12 col-lg-10 text-center">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Delicious Plum Cakes</h5>
                                            <h1 className="display-3 text-white animated slideInDown mb-4">The Best Plum Cake Shop Online</h1>
                                            <p className="fs-5 text-white mb-4 pb-3">Discover our range of rich, moist, and flavorful plum cakes, baked fresh with the finest ingredients. Perfect for every celebration and sweet craving!</p>
                                            <div className="d-flex justify-content-center gap-3">
                                                <NavLink to="/services" className="btn btn-primary py-3 px-5 animated slideInLeft">Explore Cakes</NavLink>
                                                <NavLink to="/services" className="btn btn-light py-3 px-5 animated slideInRight">Order Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid w-100" src="img/carousel-2.jpg" alt="" style={{height: '500px', objectFit: 'cover'}} />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-12 col-lg-10 text-center">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Premium Plum Cakes</h5>
                                            <h1 className="display-3 text-white animated slideInDown mb-4">Order Plum Cakes Online, Freshly Baked</h1>
                                            <p className="fs-5 text-white mb-4 pb-3">Enjoy the taste of tradition with our signature plum cakes, made with love and delivered to your doorstep.</p>
                                            <div className="d-flex justify-content-center gap-3">
                                                <NavLink to="/services" className="btn btn-primary py-3 px-5 animated slideInLeft">See Varieties</NavLink>
                                                <NavLink to="/services" className="btn btn-light py-3 px-5 animated slideInRight">Shop Now</NavLink>
                                            </div>
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
                                <h1 className="mb-4">Welcome to Plum Cake Bliss</h1>
                                <p className="mb-4">Founded with a passion for baking, Plum Cake Bliss is dedicated to bringing you the most delicious, handcrafted plum cakes. Our journey began in a small kitchen, where family recipes were perfected and shared with friends and neighbors. Today, we continue that tradition, baking each cake with love and care.</p>
                                <p className="mb-4">Our mission is to make every celebration sweeter with our signature plum cakes. Whether you're looking for a classic, chocolate, fruit & nut, or eggless variety, we have something for everyone. We believe in quality, freshness, and customer delight above all else.</p>
                                <ul className="mb-4">
                                    <li>Freshly baked daily with premium ingredients</li>
                                    <li>Wide range of flavors and custom options</li>
                                    <li>Fast, reliable delivery to your doorstep</li>
                                    <li>Perfect for birthdays, holidays, and special occasions</li>
                                </ul>
                                <NavLink to="/services" className="btn btn-primary py-3 px-5 mt-2">Order Your Cake</NavLink>
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
                                <div 
                                    className="card h-100 category-card" 
                                    onClick={() => handleCategoryClick(cat.name)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="category-image-container">
                                        <img 
                                            src={cat.image || 'img/cat-1.jpg'} 
                                            className="card-img-top category-image" 
                                            alt={cat.name} 
                                            style={{height: '200px', objectFit: 'cover'}} 
                                        />
                                        <div className="category-overlay">
                                            <span className="view-cakes-text">View Cakes</span>
                                        </div>
                                    </div>
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

                {/* Category-filtered Products Section */}
                {selectedCategory && (
                    <div className="container-xxl py-5 category-filter-section">
                        <div className="container">
                            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                                <h6 className="section-title bg-white text-center text-primary px-3">{selectedCategory}</h6>
                                <h1 className="mb-4">Cakes in {selectedCategory}</h1>
                                <button 
                                    className="btn btn-outline-primary mb-4"
                                    onClick={resetCategoryFilter}
                                >
                                    <i className="fa fa-arrow-left me-2"></i>View All Categories
                                </button>
                            </div>
                            <div className="row g-3">
                                {filteredProducts.length === 0 ? (
                                    <div className="text-center">
                                        <p>No cakes found in this category.</p>
                                    </div>
                                ) : filteredProducts.map((prod, idx) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={prod.id || idx}>
                                        <div className="card h-100 d-flex flex-column product-card">
                                            <div className="product-image-container">
                                                <img 
                                                    src={prod.image || 'img/cat-1.jpg'} 
                                                    className="card-img-top product-image" 
                                                    alt={prod.name} 
                                                    style={{height: '200px', objectFit: 'cover'}} 
                                                />
                                                <div className="product-overlay">
                                                    <div className="product-actions">
                                                        <button 
                                                            className="btn btn-primary btn-sm me-2"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setSelectedProduct(prod);
                                                            }}
                                                        >
                                                            <i className="fa fa-eye"></i>
                                                        </button>
                                                        <button 
                                                            className="btn btn-outline-light btn-sm"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                addToCart(prod);
                                                            }}
                                                            disabled={isInCart(prod.id)}
                                                        >
                                                            <i className="fa fa-shopping-cart"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body text-center d-flex flex-column">
                                                <h5 className="card-title">{prod.name}</h5>
                                                <p className="card-text flex-grow-1">{prod.description}</p>
                                                <p className="card-text fw-bold text-primary mb-3">₹{prod.price}</p>
                                                <div className="d-grid gap-2">
                                                    <button 
                                                        className="btn btn-primary btn-sm"
                                                        onClick={() => setSelectedProduct(prod)}
                                                    >
                                                        <i className="fa fa-eye me-2"></i>View Details
                                                    </button>
                                                    <button 
                                                        className="btn btn-outline-primary btn-sm"
                                                        onClick={() => addToCart(prod)}
                                                        disabled={isInCart(prod.id)}
                                                    >
                                                        <i className="fa fa-shopping-cart me-2"></i>
                                                        {isInCart(prod.id) ? 'In Cart' : 'Add to Cart'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Products Start */}
                {!selectedCategory && (
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
                                <div className="card h-100 d-flex flex-column product-card">
                                    <div className="product-image-container">
                                        <img 
                                            src={prod.image || 'img/cat-1.jpg'} 
                                            className="card-img-top product-image" 
                                            alt={prod.name} 
                                            style={{height: '200px', objectFit: 'cover'}} 
                                        />
                                        <div className="product-overlay">
                                            <div className="product-actions">
                                                <button 
                                                    className="btn btn-primary btn-sm me-2"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedProduct(prod);
                                                    }}
                                                >
                                                    <i className="fa fa-eye"></i>
                                                </button>
                                                <button 
                                                    className="btn btn-outline-light btn-sm"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        addToCart(prod);
                                                    }}
                                                    disabled={isInCart(prod.id)}
                                                >
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body text-center d-flex flex-column">
                                        <h5 className="card-title">{prod.name}</h5>
                                        <p className="card-text flex-grow-1">{prod.description}</p>
                                        <p className="card-text fw-bold text-primary mb-3">₹{prod.price}</p>
                                        <div className="d-grid gap-2">
                                            <button 
                                                className="btn btn-primary btn-sm"
                                                onClick={() => setSelectedProduct(prod)}
                                            >
                                                <i className="fa fa-eye me-2"></i>View Details
                                            </button>
                                            <button 
                                                className="btn btn-outline-primary btn-sm"
                                                onClick={() => addToCart(prod)}
                                                disabled={isInCart(prod.id)}
                                            >
                                                <i className="fa fa-shopping-cart me-2"></i>
                                                {isInCart(prod.id) ? 'In Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                )}
                {/* Products End */}
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
            
            {/* Product Details Modal */}
            {selectedProduct && (
                <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedProduct.name}</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setSelectedProduct(null)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img 
                                            src={selectedProduct.image || 'img/cat-1.jpg'} 
                                            alt={selectedProduct.name}
                                            className="img-fluid rounded"
                                            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <h4>{selectedProduct.name}</h4>
                                        <p className="text-muted mb-3">{selectedProduct.category}</p>
                                        <p className="h3 text-primary mb-3">₹{selectedProduct.price}</p>
                                        <p className="mb-4">{selectedProduct.description || 'Delicious handcrafted plum cake made with premium ingredients.'}</p>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-warning" />
                                            <small className="fa fa-star text-warning" />
                                            <small className="fa fa-star text-warning" />
                                            <small className="fa fa-star text-warning" />
                                            <small className="fa fa-star text-warning" />
                                            <span className="ms-2 text-muted">(4.5/5)</span>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button 
                                                className="btn btn-primary flex-fill"
                                                onClick={() => {
                                                    addToCart(selectedProduct);
                                                    setSelectedProduct(null);
                                                }}
                                                disabled={isInCart(selectedProduct.id)}
                                            >
                                                {isInCart(selectedProduct.id) ? 'Already in Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    className="btn btn-secondary" 
                                    onClick={() => setSelectedProduct(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Index
