import React from 'react'

function Header() {
    return (
        <div>
          
            <div className="wrapper row0">
                <div id="topbar" className="clear">
                    {/* ################################################################################################ */}
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">A - Z Index</a></li>
                            <li><a href="#">Student Login</a></li>
                            <li><a href="#">Staff Login</a></li>
                        </ul>
                    </nav>
                    {/* ################################################################################################ */}
                </div>
            </div>
            {/* ################################################################################################ */}
            {/* ################################################################################################ */}
            {/* ################################################################################################ */}
            <div className="wrapper row1">
                <header id="header" className="clear">
                    {/* ################################################################################################ */}
                    <div id="logo" className="fl_left">
                        <h1><a href="index.html">Academic Education V2</a></h1>
                        <p>Free Website Template</p>
                    </div>
                    <div className="fl_right">
                        <form className="clear" method="post" action="#">
                            <fieldset>
                                <legend>Search:</legend>
                                <input type="text" defaultValue placeholder="Search Here" />
                                <button className="fa fa-search" type="submit" title="Search"><em>Search</em></button>
                            </fieldset>
                        </form>
                    </div>
                    {/* ################################################################################################ */}
                </header>
            </div>
            <div className="wrapper row2">
                <div className="rounded">
                    <nav id="mainav" className="clear">
                        {/* ################################################################################################ */}
                        <ul className="clear">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a className="drop" href="#">Pages</a>
                                <ul>
                                    <li><a href="pages/gallery.html">Gallery</a></li>
                                    <li><a href="pages/portfolio.html">Portfolio</a></li>
                                    <li><a href="pages/full-width.html">Full Width</a></li>
                                    <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
                                    <li><a href="pages/sidebar-left-2.html">Sidebar Left 2</a></li>
                                    <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
                                    <li><a href="pages/sidebar-right-2.html">Sidebar Right 2</a></li>
                                    <li><a href="pages/basic-grid.html">Basic Grid</a></li>
                                </ul>
                            </li>
                            <li><a className="drop" href="#">Dropdown</a>
                                <ul>
                                    <li><a href="#">Level 2</a></li>
                                    <li><a className="drop" href="#">Level 2 + Drop</a>
                                        <ul>
                                            <li><a href="#">Level 3</a></li>
                                            <li><a href="#">Level 3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">Link Text</a></li>
                            <li><a href="#">Another Link Text</a></li>
                            <li><a href="#">This a very long link</a></li>
                            <li><a href="#">This is the last</a></li>
                        </ul>
                        {/* ################################################################################################ */}
                    </nav>
                </div>
            </div>

        </div>

    )
}

export default Header