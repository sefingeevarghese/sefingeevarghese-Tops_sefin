import React from 'react'

function About() {
    return (
        <div>

               
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
    )
}

export default About
