import React from "react"
import { Link } from "gatsby"

import AdminLayout from "../../components/layout/admin-layout"
import SEO from "../../components/seo"

const AdminPage = () => (
  <AdminLayout>
    <SEO title="Admin" />
    <h1>Admin Page</h1>
    <p>This is the Admin page- log in</p>
    <Link to="/admin/projects">projects </Link>
    <br />
    <Link to="/">Not the Admin? Go back to the homepage</Link>
  </AdminLayout>
)

export default AdminPage