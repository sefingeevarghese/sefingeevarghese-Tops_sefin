import React from 'react'
import Hedaer from '../Component/Hedaer'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

function PNF() {
  return (
    <div>
            <Hedaer title="Page Not Found" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>404</h1>
                        <h1>Page Not Found</h1>  
                        <h2>
                            <Link to="/">
                               Back
                            </Link>
                        </h2>
                       
                        <hr className="d-sm-none" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
  )
}

export default PNF