import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/testimonials').then(res => {
            const data = res.data;
            if (data) {
                setTestimonials(data);
            } else {
                setTestimonials([]);
            }
        }).catch(error => {
            console.error('Error fetching testimonials:', error);
            setTestimonials([]);
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
        </div>
    );
}

export default Testimonial;
