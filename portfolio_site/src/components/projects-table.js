import React, { useState, useEffect } from "react"
import db from "../services/firebase";

function useProjects(){
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        db.collection('projects')
        .onSnapshot((snapshot) => {
        const newProjects = snapshot.docs.map((doc) =>({
            id:doc.id,
            ...doc.data()
        }))
          setProjects(newProjects)      
    })
    }, []);

    return projects
}

function ProjectTable() {
    const projects = useProjects();

    const tableBody = () => {
        return projects !== undefined ? (
        <tbody>
        {projects.map((project, i) => (
            <tr key={i}>
                <td>{project.title}</td>
                <td>{project.id}</td>
                <td>view button</td>
            </tr>
        ))}
        </tbody> 
        ):
        null ;
    }

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

                {tableBody()}
               
            </table>
        </div>
    )
 }

export default ProjectTable;