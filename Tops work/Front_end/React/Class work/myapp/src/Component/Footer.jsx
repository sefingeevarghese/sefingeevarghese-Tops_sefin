import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            {/* footer section */}
            <footer className="footer_section">
                <div className="container">
                    <p>
                        © <span id="displayYear" /> All Rights Reserved By
                        <Link to="https://html.design/">Free Html Templates</Link>
                    </p>
                </div>
            </footer>
            {/* footer section */}
        </div>
    )
}

export default Footer
