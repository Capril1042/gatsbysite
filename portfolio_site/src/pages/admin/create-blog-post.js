import React from "react"

import AdminLayout from "../../components/layout/admin-layout"
import CreatePreviewBlog from "../../components/blog/create-preview"
import SEO from "../../components/seo"

function CreateBlogAdmin() {
  return (
  <AdminLayout>
    <SEO title="Admin" />
    <CreatePreviewBlog />
  </AdminLayout>
)
}
export default CreateBlogAdmin