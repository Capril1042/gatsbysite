import React, {useState} from "react"
import "./blog-previewer.css"

function BlogPreviewer(props){
    return (
        <div className="blog-previewer-container">
         <h1>{props.title}</h1>
        </div>
    )
}
export default BlogPreviewer