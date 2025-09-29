import React from 'react'
import Hedaer from '../Component/Hedaer'
import Footer from '../Component/Footer'

function Contact() {
    return (
        <div>
            <Hedaer title="Contact Page" />
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2>Contact Form</h2>
                        <form action="/action_page.php">
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                            </div>
                            <div className="form-check mb-3">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact