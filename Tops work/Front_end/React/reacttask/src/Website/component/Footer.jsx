import React from 'react'

function Footer() {
    return (
        <div>
            <div className="wrapper row4">
                <div className="rounded">
                    <footer id="footer" className="clear">
                        {/* ################################################################################################ */}
                        <div className="one_third first">
                            <figure className="center"><img className="btmspace-15" src="images/demo/worldmap.png" alt />
                                <figcaption><a href="#">Find Us With Google Maps »</a></figcaption>
                            </figure>
                        </div>
                        <div className="one_third">
                            <address>
                                Long Educational Facility Name<br />
                                Address Line 2<br />
                                Town/City<br />
                                Postcode/Zip<br />
                                <br />
                                <i className="fa fa-phone pright-10" /> xxxx xxxx xxxxxx<br />
                                <i className="fa fa-envelope-o pright-10" /> <a href="#">contact@domain.com</a>
                            </address>
                        </div>
                        <div className="one_third">
                            <p className="nospace btmspace-10">Stay Up to Date With What's Happening</p>
                            <ul className="faico clear">
                                <li><a className="faicon-twitter" href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a className="faicon-linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                                <li><a className="faicon-facebook" href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a className="faicon-flickr" href="#"><i className="fa fa-flickr" /></a></li>
                                <li><a className="faicon-rss" href="#"><i className="fa fa-rss" /></a></li>
                            </ul>
                            <form className="clear" method="post" action="#">
                                <fieldset>
                                    <legend>Subscribe To Our Newsletter:</legend>
                                    <input type="text" defaultValue placeholder="Enter Email Here…" />
                                    <button className="fa fa-sign-in" type="submit" title="Sign Up"><em>Sign Up</em></button>
                                </fieldset>
                            </form>
                        </div>
                        {/* ################################################################################################ */}
                    </footer>
                </div>
            </div>
            {/* ################################################################################################ */}
            {/* ################################################################################################ */}
            {/* ################################################################################################ */}
            <div className="wrapper row5">
                <div id="copyright" className="clear">
                    {/* ################################################################################################ */}
                    <p className="fl_left">Copyright © 2014 - All Rights Reserved - <a href="#">Domain Name</a></p>
                    <p className="fl_right">Template by <a target="_blank" href="http://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
                    {/* ################################################################################################ */}
                </div>
            </div>
          
        </div>

    )
}

export default Footer