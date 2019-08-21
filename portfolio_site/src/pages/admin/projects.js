import React from "react"
import { Link } from "gatsby"

import AdminLayout from "../../components/layout/admin-layout"
import SEO from "../../components/seo"
import ProjectTable from "../../components/projects-table"


const ProjectsPageAdmin = () => (
  <AdminLayout>
    <SEO title="AdminProjects" />
    <h2 className="admin-header">Admin Projects Page</h2>
    <Link to="/admin/create-project" className="admin-link-add"> + Add a New Project</Link>
    <ProjectTable/>
    <br />
    <Link to="/admin" className="admin-link">Go back to Admin Dashboard</Link>
  </AdminLayout>
)

export default ProjectsPageAdmin