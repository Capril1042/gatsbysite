import React, { useState, useEffect } from "react"

import db from "../services/firebase"

function useProject(id){
    const [project, setProject] = useState([]);


    useEffect(()=> {
        db.collection('projects').doc(id)
        .get()
        .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log('Document data:', doc.data());
              const newProject = doc.data();
              setProject(newProject);
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          });
    }, []);
    
    return project
}

function  Project(props) {
    const project = useProject(props.projectId);
    console.log(project)
    return (
  <div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
</div>
)
    }
export default Project