import React, { useState }from "react"

import BlogPreviewer from "./blog-previewer"
import CreateBlogPost from "./create-blog-post"
import createDocument from "../../services/crud/create"

function CreatePreviewBlog () {

    const [title, setTitle] = useState("");
    const [blogPost, setBlogPost] = useState('');

    const handleTitleChange = e => {
        setTitle(e.target.value);
  }

    const handleBlogChange = e => {
        setBlogPost(e.target.value);
  }
    
    const addBlog = () => {
        const blog = {
            title,
            post: blogPost
        }
        createDocument('blogs', blog);  
    }

    return (
    <div>
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
    <div className="create-blog-buttons">
    <button onClick={addBlog}>Add Blog</button>
    </div>
    </div>
    </div>
    )
}

export default CreatePreviewBlog