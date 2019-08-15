import React from "react"
import { Link } from "gatsby"

const NavBar = () => (
    <div
    style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
    <span 
        style={{
        color: `white`,
            textDecoration: `none`,
            fontSize: '1.5rem',
            paddingTop: '1%',
          }}>
          Software Engineer
    </span>
    <nav  style={{
        marginBottom:'0',
        paddingTop: '1%',
        }}>
    <Link to="/about"
    style={{
        color: `white`,
        textDecoration: `none`,
        marginBottom:'0',
        paddingTop: '1%',
        }}>
        about </Link>
    <Link to="/blog"
    style={{
        color: `white`,
        textDecoration: `none`,
        }}>
        blog </Link>
    <Link to="/portfolio"
    style={{
        color: `white`,
        textDecoration: `none`,
        }}>
    portfolio </Link>
    <Link to="/contact"
    style={{
        color: `white`,
        textDecoration: `none`,
        }}>
        contact
    </Link>
    </nav>
    </div>
)
export default NavBar