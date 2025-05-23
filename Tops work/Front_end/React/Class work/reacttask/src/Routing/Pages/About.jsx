import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'


function About() {
  return (
    <div>
        <Header title="About Page" />
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12">
                    <h2>About Us</h2>
                    <h5>Photo of me:</h5>
                    <div className="fakeimg">
                        <link to="/">
                            Normal Link Routing Home page
                        </link>
                    </div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    <h3 className="mt-4">Some Links</h3>
                    <p>Lorem ipsum dolor sit ame.</p>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <hr className="d-sm-none" />
                </div>
            </div>
        </div>

        <Footer />
    </div>
)
}

export default About
