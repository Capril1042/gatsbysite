import React from "react"
import { navigate } from "gatsby"
import deleteProject from "../services/deleteproject"

function DeleteAlert(props) {

    const handleDelete = (id) => {
        deleteProject(id);
        navigate('/admin/projects');
    }

    return (
    <div className="edit-delete-alert-container">
        <p className="admin-delete-message">Are you sure you want to delete this project ? </p>
        <button className="admin-button-delete" onClick={()=> handleDelete(props.projectId)}>Delete </button>
        <button className="admin-button-cancel" onClick={props.handleCancel}>cancel</button>
    </div>
    )
}
export default DeleteAlert