import React, {useState} from "react"
import Markdown from "markdown-to-jsx"
import "./blog-previewer.css"

function BlogPreviewer(props){
    return (
        <div className="blog-previewer-container">
         <h1>{props.title}</h1>
         <Markdown>{props.blog}</Markdown>
        </div>
    )
}
export default BlogPreviewer