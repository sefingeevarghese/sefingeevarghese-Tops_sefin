import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../../Components/CartContext';
import { toast } from 'react-toastify';
import '../../Components/CategoryProductHover.css';

function Services() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart, isInCart } = useCart();

    useEffect(() => {
        // Fetch categories from local JSON server
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

        // Fetch products from local JSON server
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
            {/* Categories Start */}
            <div className="container-xxl py-5">
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
                                <div className="card h-100 category-card">
                                    <div className="category-image-container">
                                        <img 
                                            src={cat.image || 'img/cat-1.jpg'} 
                                            className="card-img-top category-image" 
                                            alt={cat.name} 
                                            style={{ height: '200px', objectFit: 'cover' }} 
                                        />
                                        <div className="category-overlay">
                                            <span className="view-cakes-text">View Category</span>
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
            </div>
            {/* Categories End */}
            {/* Products Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Our Products</h6>
                        <h1 className="mb-5">Our Delicious Plum Cakes</h1>
                    </div>
                    <div className="row g-3">
                        {products.length === 0 ? (
                            <div className="text-center">No products found.</div>
                        ) : products.map((prod, idx) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={prod.id || idx}>
                                <div className="card h-100 product-card">
                                    <div className="product-image-container">
                                        <img 
                                            src={prod.image || 'img/cat-1.jpg'} 
                                            className="card-img-top product-image" 
                                            alt={prod.name} 
                                            style={{ height: '250px', objectFit: 'cover' }} 
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
                                        <p className="card-text fw-bold text-primary h4">₹{prod.price}</p>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-warning" />
                                            <small className="fa fa-star text-warning" />
                                            <small className="fa fa-star text-warning" />
                                            <small className="fa fa-star text-warning" />
                                            <small className="fa fa-star text-warning" />
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button 
                                                className="btn btn-primary btn-sm flex-fill"
                                                onClick={() => setSelectedProduct(prod)}
                                            >
                                                View Details
                                            </button>
                                            <button 
                                                className="btn btn-outline-primary btn-sm flex-fill"
                                                onClick={() => addToCart(prod)}
                                                disabled={isInCart(prod.id)}
                                            >
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
            {/* Products End */}
            
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
    )
}

export default Services
