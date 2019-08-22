import React from "react"
import { Link } from "gatsby"

import AdminLayout from "../../components/layout/admin-layout"
import SEO from "../../components/seo"

const AdminBlogPage = () => (
  <AdminLayout>
    <SEO title="AdminBlogPage" />
    <h2>Blogs</h2>
    <p>This is the Admin  Blog page- log in</p>
    <Link to="/admin/create-blog-post"> + add a new blog post  </Link>
    <br />
  </AdminLayout>
)

export default AdminBlogPage