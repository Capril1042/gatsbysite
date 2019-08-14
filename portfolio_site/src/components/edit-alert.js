import React from "react"

import CreateProjectForm from "./create-project-form"


function EditAlert(props) {
return <div className="edit-delete-alert-container">
<CreateProjectForm type="update" projectId={props.projectId}/>
<button className="admin-button-save">Save changes </button>
<button className="admin-button-cancel"onClick={props.handleCancel}>cancel</button>
</div>
}
export default EditAlert