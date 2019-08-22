import React from "react"
import { Link } from "gatsby"

import AdminLayout from "../../components/layout/admin-layout"
import SEO from "../../components/seo"

const CreateBlogAdmin = () => (
  <AdminLayout>
    <SEO title="Admin" />
    <h1>Create Blog Page</h1>
    <p>This is the create blog page</p>
  </AdminLayout>
)

export default CreateBlogAdmin