// returns all projects

import db from "./firebase"

export default function getAllProjects() {
    let projects = [];
    db.collection('projects')
    .get()
    .then(snapshot => {
        let project = {};
        snapshot.forEach(doc => {
            project = doc.data();
            project.id = doc.id
            projects.push(project);
    });
  })
        .catch(err => {
            console.log('Error getting documents', err);
  });
  console.log(projects)
  return projects;
}