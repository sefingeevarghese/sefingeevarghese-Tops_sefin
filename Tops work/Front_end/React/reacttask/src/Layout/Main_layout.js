import React from 'react'

import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Navbar from "./Navbar";

function Main_layout() {
    return (
        <div>
            <Header />
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default Main_layout