import React from 'react'
import { Link } from 'react-router-dom'
import Header2 from '../Component/Header2'
import Footer from '../Component/Footer'

function About() {
    return (
        <div>
            <Header2 />
            {/* about section */}
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="images/about-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        About <span>Hospital</span>
                                    </h2>
                                </div>
                                <p>
                                    has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors
                                </p>
                                <Link to="/about" className="read-more-btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about section */}
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
                                                 <Link to="about.html" className="active">
                                                     About
                                                 </Link>
                                                 <Link to="treatment.html" >
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

export default About
