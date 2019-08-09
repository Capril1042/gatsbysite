import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AdminPage = () => (
  <Layout>
    <SEO title="Admin" />
    <h1>Admin Page</h1>
    <p>This is the Admin page- log in</p>
    <Link to="/admin/projects">projects </Link>
    <br />
    <Link to="/">Not the Admin? Go back to the homepage</Link>
  </Layout>
)

export default AdminPage