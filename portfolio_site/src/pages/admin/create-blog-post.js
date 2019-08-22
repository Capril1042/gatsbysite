import React, { useState }from "react"
import { Link } from "gatsby"

import AdminLayout from "../../components/layout/admin-layout"
import BlogPreviewer from "../../components/blog-previewer"
import CreateBlogPost from "../../components/create-blog-post"
import "./create-blog-post.css"
import SEO from "../../components/seo"

function CreateBlogAdmin() {
  const [title, setTitle] = useState("");
  const [blogPost, setBlogPost] = useState("");

  const handleTitleChange = e => {
    setTitle(e.target.value);
  }

  const handleBlogChange = e => {
    setBlogPost(e.target.value);
  }

    console.log(blogPost)
  return (
  <AdminLayout>
    <SEO title="Admin" />
    <h2>Add a Blog Post</h2>
    <div className="create-blog-editor">
    <div className="blog-create">
    <h3> Write your Post </h3>
    <CreateBlogPost 
    handleBlogChange={handleBlogChange}
    handleTitleChange={handleTitleChange}
    title={title}
    blogPost={blogPost}/>
    </div>
    <div className="blog-view">
    <h3> Preview your Post </h3>
    <BlogPreviewer title={title} blog={blogPost}/>
    </div>
    </div>
  </AdminLayout>
)
}
export default CreateBlogAdmin