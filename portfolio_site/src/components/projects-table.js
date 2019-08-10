import React, { useState, useEffect } from "react"

import getAllProjects from "../services/getprojects";

function ProjectTable() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchProjects() {
        const response = await getAllProjects();
        setProjects(projects => ({projects: response}));
        setLoading(false)
    }
      
    useEffect(() => {
        fetchProjects();
    }, []);

    const tableBody = () => {
        return !loading ? (
        <tbody>
        {projects.projects.map((project, i) => (
            <tr key={i}>
                <td>{project.title}</td>
                <td>github link</td>
                <td>view button</td>
            </tr>
        ))}
        </tbody> 
        ):
        null ;
    }

console.log(loading)
console.log(projects)
    return (
        <div>
            ProjectTable
            <table>
                <thead>
                <tr>
                    <th> Title </th>
                    <th> GitHub Link </th>
                    <th> View </th>
                </tr>
                </thead>

                {tableBody}
               
            </table>
        </div>
    )
 }

export default ProjectTable;