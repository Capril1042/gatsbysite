import React from "react"

import EditAlert from "./edit-alert"
import DeleteAlert from "./delete-alert"

function EditAlertContainer(props) {
    const alert = props.action === 'edit' ? 
        <EditAlert 
            handleCancel={props.handleCancel} 
            projectId={props.projectId}/> 
        :
        <DeleteAlert 
            handleCancel={props.handleCancel} 
            projectId={props.projectId}/>
        ;

    return (
     props.action !== undefined ? alert : null
    )
}
export default EditAlertContainer