import React from 'react'

function Notfound() {
  return (
    <div>
      {/* 404 Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">Sorry, the page you are looking for does not exist in our plum cake website! Maybe go to our home page or try to use a search?</p>
              <a className="btn btn-primary rounded-pill py-3 px-5" href>Go Back To Home</a>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End */}


    </div>
  )
}

export default Notfound
