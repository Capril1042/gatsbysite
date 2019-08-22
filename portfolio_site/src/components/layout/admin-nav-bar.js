import React from "react"
import { Link } from "gatsby"
import "./nav-bar.css"

const AdminNavBar = () => (
    <div className="nav-bar">
        <span className="header-description">
            Admin Dashboard
        </span>
        <nav className="nav-links">
            <Link className="nav-link" to="/admin/projects">
                projects
            </Link>

            <Link className="nav-link" to="/admin">
                blogs 
            </Link>
        </nav>
    </div>
)
export default AdminNavBar