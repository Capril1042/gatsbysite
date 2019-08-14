import React from "react"
import { Link } from "gatsby"

import CreateProjectForm from "../../components/create-project-form";
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const CreateProjectAdmin = () => (
  <Layout>
    <SEO title="AdminProjectsCreate" />
    <h1>Projects Page Create- Admin</h1>
    <CreateProjectForm type="create"/>
    <Link to="/admin">Go back to the homepage</Link>
    <Link to="/admin/projects">Go back to Projects</Link>
  </Layout>
)

export default CreateProjectAdmin