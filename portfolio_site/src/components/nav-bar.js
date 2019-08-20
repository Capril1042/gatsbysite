import React from "react"
import { Link } from "gatsby"
import "./nav-bar.css"

const NavBar = () => (
    <div className="nav-bar">
        <span className="header-description">
            Software Engineer
        </span>
        <nav className="nav-links">
            <Link className="nav-link" to="/about">
                about 
            </Link>

            <Link className="nav-link" to="/blog">
                blog 
            </Link>

            <Link className="nav-link" to="/contact">
                contact
            </Link>

            <Link className="nav-link" to="/portfolio">
                portfolio
            </Link>
        </nav>
    </div>
)
export default NavBar