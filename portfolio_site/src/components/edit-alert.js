import React from "react"

import CreateProjectForm from "./create-project-form"


function EditAlert(props) {
return <div>
<CreateProjectForm type="update" projectId={props.projectId}/>
<button>Save changes </button>
<button onClick={props.handleCancel}>cancel</button>
</div>
}
export default EditAlert