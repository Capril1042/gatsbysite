import React, { useState, useEffect }from "react"

// import AdminButton from "../../components/proect-admin-button"
import EditAlertContainer from "../../components/edit-alert-container"
import Project from "../../components/project"
import Layout from "../../components/layout"
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
    <Layout>
        <SEO title="AdminProjects" />
        <h1>Projects Page Edit- Admin</h1>
        <EditAlertContainer action={action} handleCancel={handleCancel} projectId={location.state.projectId}/>
        <Project projectId={location.state.projectId}/>
        <button onClick={() => handleActionChange('edit')}>edit</button>
        <button onClick={() => handleActionChange('delete')}>delete</button>
    </Layout>
    )
}
export default EditProjectAdmin