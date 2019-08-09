import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ProjectsPageAdmin = () => (
  <Layout>
    <SEO title="AdminProjects" />
    <h1>Projects Page- Admin</h1>
    <p>Add a Project</p>
    <Link to="/admin/create-project">Create a Project</Link>
    <br />
    <Link to="/admin">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPageAdmin