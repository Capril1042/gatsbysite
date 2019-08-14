import React from "react"
import { navigate } from "gatsby"
import deleteProject from "../services/deleteproject"

function DeleteAlert(props) {

    const handleDelete = (id) => {
        deleteProject(id);
        navigate('/admin/projects');
    }

    return (
    <div>
        <p>Are you sure you want to delete this project ? </p>
        <button onClick={()=> handleDelete(props.projectId)}>Delete </button>
        <button onClick={props.handleCancel}>cancel</button>
    </div>
    )
}
export default DeleteAlert