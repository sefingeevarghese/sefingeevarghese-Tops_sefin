import React from 'react'
import './Layout.css'
import Header from './Header'
import Footer from './Footer'

function Main_layout() {
    return (
        <div className="layout-container">
            <header className="layout-header">
                <Header />
            </header>
            
            <main className="layout-main">
                <div className="content-wrapper">
                    <section className="hero-section">
                        <h1>Welcome to Our Platform</h1>
                        <p>Discover amazing features and services</p>
                    </section>

                    <section className="features-section">
                        <div className="feature-card">
                            <h3>Feature One</h3>
                            <p>Description of the first feature goes here</p>
                        </div>
                        <div className="feature-card">
                            <h3>Feature Two</h3>
                            <p>Description of the second feature goes here</p>
                        </div>
                        <div className="feature-card">
                            <h3>Feature Three</h3>
                            <p>Description of the third feature goes here</p>
                        </div>
                    </section>

                    <section className="cta-section">
                        <h2>Ready to Get Started?</h2>
                        <button className="primary-button">Get Started</button>
                    </section>
                </div>
            </main>

            <footer className="layout-footer">
                <Footer />
            </footer>
        </div>
    )
}

export default Main_layout