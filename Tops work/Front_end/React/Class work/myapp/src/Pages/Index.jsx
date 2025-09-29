import React from 'react'
import { Link } from 'react-router-dom'
import Header1 from '../Component/Header1'
import Footer from '../Component/Footer'

function Index() {
    return (
        <div>
            <Header1 />
            <section className="book_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form>
                                <h4>
                                    BOOK <span>APPOINTMENT</span>
                                </h4>
                                <div className="form-row ">
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="inputPatientName">Patient Name </label>
                                        <input type="text" className="form-control" id="inputPatientName" placeholder />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="inputDoctorName">Doctor's Name</label>
                                        <select name className="form-control wide" id="inputDoctorName">
                                            <option value="Normal distribution ">Normal distribution </option>
                                            <option value="Normal distribution ">Normal distribution </option>
                                            <option value="Normal distribution ">Normal distribution </option>
                                        </select>
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="inputDepartmentName">Department's Name</label>
                                        <select name className="form-control wide" id="inputDepartmentName">
                                            <option value="Normal distribution ">Normal distribution </option>
                                            <option value="Normal distribution ">Normal distribution </option>
                                            <option value="Normal distribution ">Normal distribution </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row ">
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="inputPhone">Phone Number</label>
                                        <input type="number" className="form-control" id="inputPhone" placeholder="XXXXXXXXXX" />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="inputSymptoms">Symptoms</label>
                                        <input type="text" className="form-control" id="inputSymptoms" placeholder />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="inputDate">Choose Date </label>
                                        <div className="input-group date" id="inputDate" data-date-format="mm-dd-yyyy">
                                            <input type="text" className="form-control" readOnly />
                                            <span className="input-group-addon date_icon">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="submit" className="btn ">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* end book section */}
            {/* about section */}
            <section className="about_section">
                <div className="container  ">
                    <div className="row">
                        <div className="col-md-6 ">
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
                                <Link to="/about">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about section */}
            {/* treatment section */}
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
                                    <Link to="/treatment" className="read-more-btn">
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
                                    <Link to="/treatment" className="read-more-btn">
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
                                    <Link to="/treatment" className="read-more-btn">
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
                                    <Link to="/treatment" className="read-more-btn">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end treatment section */}
            {/* team section */}
            <section class="team_section layout_padding">
               <div class="container">
                 <div class="heading_container heading_center">
                   <h2>
                     Our <span>Doctors</span>
                   </h2>
                 </div>
                 <div class="carousel-wrap ">
                   <div class="owl-carousel team_carousel">
                     <div class="item">
                       <div class="box">
                         <div class="img-box">
                           <img src="images/team1.jpg" alt="" />
                         </div>
                         <div class="detail-box">
                           <h5>
                             Hennry
                           </h5>
                           <h6>
                             MBBS
                           </h6>
                           <div className="social_box">
                             <Link to="">
                               <i className="fa fa-facebook" aria-hidden="true" />
                             </Link>
                             <Link to="">
                               <i className="fa fa-twitter" aria-hidden="true" />
                             </Link>
                             <Link to="">
                               <i className="fa fa-linkedin" aria-hidden="true" />
                             </Link>
                             <Link to="">
                               <i className="fa fa-instagram" aria-hidden="true" />
                             </Link>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div class="item">
                       <div class="box">
                         <div class="img-box">
                           <img src="images/team2.jpg" alt="" />
                         </div>
                         <div class="detail-box">
                           <h5>
                             Jenni
                           </h5>
                           <h6>
                             MBBS
                           </h6>
                           <div className="social_box">
                             <Link to="">
                               <i className="fa fa-facebook" aria-hidden="true" />
                             </Link>
                             <Link to="">
                               <i className="fa fa-twitter" aria-hidden="true" />
                             </Link>
                             <Link to="">
                               <i className="fa fa-linkedin" aria-hidden="true" />
                             </Link>
                             <Link to="">
                               <i className="fa fa-instagram" aria-hidden="true" />
                             </Link>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div class="item">
                       <div class="box">
                         <div class="img-box">
                           <img src="images/team3.jpg" alt="" />
                         </div>
                         <div class="detail-box">
                           <h5>
                             Morco
                           </h5>
                           <h6>
                             MBBS
                           </h6>
                           <div className="social_box">
                             <Link to="">
                               <i className="fa fa-facebook" aria-hidden="true" />
                             </Link>
                             <Link to="">
                               <i className="fa fa-twitter" aria-hidden="true" />
                             </Link>
                             <Link to="">
                               <i className="fa fa-linkedin" aria-hidden="true" />
                             </Link>
                             <Link to="">
                               <i className="fa fa-instagram" aria-hidden="true" />
                             </Link>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </section>
            {/* end team section */}
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
            {/* contact section */}
            <section className="contact_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Get In Touch
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="form_container">
                                <form action>
                                    <div>
                                        <input type="text" placeholder="Full Name" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" />
                                    </div>
                                    <div className="btn_box">
                                        <button>
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="img-box">
                                <img src="images/contact-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact section */}
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
                                                                   <Link to="index.html" className="active">
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
                                                                   <Link to="testimonial.html" >
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

export default Index
