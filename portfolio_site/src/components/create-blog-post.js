import React, {useState} from "react"
import "./create-blog-post.css"

function CreateBlogPost(props){

    return (
        <div className="create-blog-container">
            <form className="create-blog-form">
                <label className="create-blog-label">
                    Title:
                    <input
                    className="create-blog-title-input"
                    type="text"
                    name="title"
                    value={props.title}
                    onChange={props.handleTitleChange}
                    />
                </label>
                <label className="create-blog-label">
                Blog Post:
                <textarea
                className="create-blog-input-post"
                type="textarea"
                name="blogPost"
                value={props.blogPost}
                onChange={props.handleBlogChange}
                />
            </label>
            </form>
        </div>
    )
}
export default CreateBlogPost