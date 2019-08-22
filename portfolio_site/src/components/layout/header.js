import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import NavBar from "./nav-bar"
import AdminNavBar from "./admin-nav-bar"

const Header = ({ siteTitle, adminStatus }) => (
  <header
    style={{
      background: `#006600`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {adminStatus === true ? <AdminNavBar/> : <NavBar/> }
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
