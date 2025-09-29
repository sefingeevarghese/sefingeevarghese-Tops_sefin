import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import Header2 from '../Component/Header2'

function Treatment() {
    return (
        <div>
            <Header2 />
            <section className="treatment_section layout_padding">
                <div className="side_img">
                    <img src="images/treatment-side-img.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Hospital <span>Treatment</span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/t1.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h4>
                                        Nephrologist Care
                                    </h4>
                                    <p>
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything
                                    </p>
                                    <Link to="/treatment">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/t2.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h4>
                                        Eye Care
                                    </h4>
                                    <p>
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything
                                    </p>
                                    <Link to="/treatment">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/t3.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h4>
                                        Pediatrician Clinic
                                    </h4>
                                    <p>
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything
                                    </p>
                                    <Link to="/treatment">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/t4.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h4>
                                        Parental Care
                                    </h4>
                                    <p>
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything
                                    </p>
                                    <Link to="/treatment">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* info section */}
            <section className="info_section ">
                <div className="container">
                    <div className="info_top">
                        <div className="info_logo">
                            <a href>
                                <img src="images/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="info_form">
                            <form action>
                                <input type="email" placeholder="Your email" />
                                <button>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="info_bottom layout_padding2">
                        <div className="row info_main_row">
                            <div className="col-md-6 col-lg-3">
                                <h5>
                                    Address
                                </h5>
                                <div className="info_contact">
                                    <Link to>
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        <span>
                                            Location
                                        </span>
                                    </Link>
                                    <Link to>
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        <span>
                                            Call +01 1234567890
                                        </span>
                                    </Link>
                                    <Link to>
                                        <i className="fa fa-envelope" />
                                        <span>
                                            demo@gmail.com
                                        </span>
                                    </Link>
                                </div>
                                <div className="social_box">
                                    <Link to>
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </Link>
                                    <Link to>
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </Link>
                                    <Link to>
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                    </Link>
                                    <Link to>
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="info_links">
                                    <h5>
                                        Useful link
                                    </h5>
                                    <div className="info_links_menu">
                                        <Link to="index.html">
                                            Home
                                        </Link>
                                        <Link to="about.html">
                                            About
                                        </Link>
                                        <Link to="treatment.html" className="active">
                                            Treatment
                                        </Link>
                                        <Link to="doctors.html">
                                            Doctors
                                        </Link>
                                        <Link to="testimonial.html">
                                            Testimonial
                                        </Link>
                                        <Link to="contact.html">
                                            Contact us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="info_post">
                                    <h5>
                                        LATEST POSTS
                                    </h5>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post1.jpg" alt="" />
                                        </div>
                                        <p>
                                            Normal
                                            distribution
                                        </p>
                                    </div>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post2.jpg" alt="" />
                                        </div>
                                        <p>
                                            Normal
                                            distribution
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="info_post">
                                    <h5>
                                        News
                                    </h5>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post3.jpg" alt="" />
                                        </div>
                                        <p>
                                            Normal
                                            distribution
                                        </p>
                                    </div>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post4.png" alt="" />
                                        </div>
                                        <p>
                                            Normal
                                            distribution
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end info_section */}



            <Footer />

        </div>
    )
}

export default Treatment
