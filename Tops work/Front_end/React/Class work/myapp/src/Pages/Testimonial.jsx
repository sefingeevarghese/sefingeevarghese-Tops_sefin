import React from 'react'
import Header2 from '../Component/Header2'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'

function Testimonial() {
    return (
        <div>
          <Header2/>
            <div>
                {/* client section */}
                <section className="client_section layout_padding">
                    <div className="container">
                        <div className="heading_container">
                            <h2>
                                <span>Testimonial</span>
                            </h2>
                        </div>
                    </div>
                    <div className="container px-0">
                        <div id="customCarousel2" className="carousel  carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="box">
                                        <div className="client_info">
                                            <div className="client_name">
                                                <h5>
                                                    Morijorch
                                                </h5>
                                                <h6>
                                                    Default model text
                                                </h6>
                                            </div>
                                            <i className="fa fa-quote-left" aria-hidden="true" />
                                        </div>
                                        <p>
                                            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="box">
                                        <div className="client_info">
                                            <div className="client_name">
                                                <h5>
                                                    Rochak
                                                </h5>
                                                <h6>
                                                    Default model text
                                                </h6>
                                            </div>
                                            <i className="fa fa-quote-left" aria-hidden="true" />
                                        </div>
                                        <p>
                                            Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="box">
                                        <div className="client_info">
                                            <div className="client_name">
                                                <h5>
                                                    Brad Johns
                                                </h5>
                                                <h6>
                                                    Default model text
                                                </h6>
                                            </div>
                                            <i className="fa fa-quote-left" aria-hidden="true" />
                                        </div>
                                        <p>
                                            Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel_btn-box">
                                <Link className="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
                                    <i className="fa fa-angle-left" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </Link>
                                <Link className="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
                                    <i className="fa fa-angle-right" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end client section */}
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
                                                       <Link to="treatment.html" >
                                                           Treatment
                                                       </Link>
                                                       <Link to="doctors.html">
                                                           Doctors
                                                       </Link>
                                                       <Link to="testimonial.html" className="active">
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
               
            </div>
          <Footer />

        </div>
    )
}

export default Testimonial
