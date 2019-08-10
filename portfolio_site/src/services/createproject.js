// Takes in a project object
// adds project to firestore

import db from "./firebase"

export default function addProject(project) {
    db.collection("projects").add({
        title: project.title,
        imageURL: project.imageURL,
        description: project.description,
        gitHubLink: project.gitHubLink,
        link: project.link
    });
};