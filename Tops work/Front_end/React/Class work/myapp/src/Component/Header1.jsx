import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header1() {
    return (
        <div>
            <div className="hero_area">
                {/* header section strats */}
                <header className="header_section">
                    <div className="header_top">
                        <div className="container">
                            <div className="contact_nav">
                                <Link to="#">
                                    <i className="fa fa-phone" aria-hidden="true" />
                                    <span>
                                        Call : +01 123455678990
                                    </span>
                                </Link>
                                <Link to="#">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <span>
                                        Email : demo@gmail.com
                                    </span>
                                </Link>
                                <Link to="#">
                                    <i class="fa fa-map-marker" aria-hidden="true" />
                                    <span>
                                        Location
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="header_bottom">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <Link className="navbar-brand" to="/">
                                    <img src="images/logo.png" alt="" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className=""> </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/treatment">Treatment</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/doctors">Doctors</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/testimonial">Testimonial</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="quote_btn-container">
                                    <div className="auth_links">
                                        <Link to="/login" className="auth_link">
                                            <i className="fa fa-user" aria-hidden="true" />
                                            <span>Login</span>
                                        </Link>
                                        <Link to="/signup" className="auth_link">
                                            <i className="fa fa-user" aria-hidden="true" />
                                            <span>Sign Up</span>
                                        </Link>
                                    </div>
                                    <form className="form-inline">
                                        <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                                            <i className="fa fa-search" aria-hidden="true" />
                                        </button>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                {/* end header section */}
                {/* slider section */}
                <section className="slider_section ">
                    <div className="dot_design">
                        <img src="images/dots.png" alt="" />
                    </div>
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <div className="play_btn">
                                                    <button>
                                                        <i className="fa fa-play" aria-hidden="true" />
                                                    </button>
                                                </div>
                                                <h1>
                                                    Mico <br />
                                                    <span>Hospital</span>
                                                </h1>
                                                <p>
                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                                                </p>
                                                <Link to="/contact" className="contact-btn">Contact Us</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src="images/slider-img.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <div className="play_btn">
                                                    <button>
                                                        <i className="fa fa-play" aria-hidden="true" />
                                                    </button>
                                                </div>
                                                <h1>
                                                    Mico <br />
                                                    <span>
                                                        Hospital
                                                    </span>
                                                </h1>
                                                <p>
                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                                                </p>
                                                <Link to="/contact">
                                                    Contact Us
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src="images/slider-img.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <div className="play_btn">
                                                    <button>
                                                        <i className="fa fa-play" aria-hidden="true" />
                                                    </button>
                                                </div>
                                                <h1>
                                                    Mico <br />
                                                    <span>
                                                        Hospital
                                                    </span>
                                                </h1>
                                                <p>
                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                                                </p>
                                                <Link to="/contact">
                                                    Contact Us
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src="images/slider-img.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel_btn-box">
                            <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                                <img src="images/prev.png" alt="" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                                <img src="images/next.png" alt="" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </section>
                {/* end slider section */}
            </div>
        </div>
    )
}

export default Header1
