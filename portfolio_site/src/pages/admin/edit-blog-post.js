import React from "react"
import { Link } from "gatsby"

import AdminLayout from "../../components/layout/admin-layout"
import SEO from "../../components/seo"

const EditBlogAdmin = () => (
  <AdminLayout>
    <SEO title="Admin" />
    <h1>Edit Blog Page</h1>
    <p>This is the Edit blog page</p>
  </AdminLayout>
)

export default EditBlogAdmin