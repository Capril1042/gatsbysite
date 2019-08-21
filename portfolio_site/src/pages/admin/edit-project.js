import React, { useState, useEffect }from "react"

// import AdminButton from "../../components/proect-admin-button"
import EditAlertContainer from "../../components/edit-alert-container"
import Project from "../../components/project"
import AdminLayout from "../../components/layout/admin-layout"
import SEO from "../../components/seo"

const EditProjectAdmin = ({location}) => {

    const [ action, setAction ] = useState();

    const handleCancel = () => {
        setAction();
    }
    const handleActionChange = (actionType) => {
        if (actionType === 'edit') {
            setAction('edit');
        } else {
            setAction('delete');
        }
    }
  
    return (
    <AdminLayout>
        <SEO title="AdminProjects" />
        <h2 className="admin-header">Admin Project View Page</h2>
        <EditAlertContainer action={action} handleCancel={handleCancel} projectId={location.state.projectId}/>
        <Project projectId={location.state.projectId}/>
        <button onClick={() => handleActionChange('edit')}>edit</button>
        <button onClick={() => handleActionChange('delete')}>delete</button>
    </AdminLayout>
    )
}
export default EditProjectAdmin