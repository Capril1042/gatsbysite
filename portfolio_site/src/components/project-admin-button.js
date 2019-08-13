import React from "react"
import { Link } from "gatsby"

const AdminLinkButton = (props) => (

    <button>
         <Link to={props.pageLink} state={{ projectId: props.projectId }}>
        {props.buttonName}</Link> 
    </button>
)

export default AdminLinkButton