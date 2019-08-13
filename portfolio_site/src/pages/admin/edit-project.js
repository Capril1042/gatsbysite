import React from "react"

// import AdminButton from "../../components/proect-admin-button"
import Project from "../../components/project"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const EditProjectAdmin = ({location}) => (

  <Layout>
    <SEO title="AdminProjects" />
    <h1>Projects Page Edit- Admin</h1>
    <Project projectId={location.state.projectId}/>
  </Layout>
)
export default EditProjectAdmin