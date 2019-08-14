import db from "./firebase"

export default function updateProject(id, project) {
    db.collection('projects').doc(id).set({
        title: project.title,
        imageURL: project.imageURL,
        description: project.description,
        gitHubLink: project.gitHubLink,
        link: project.link
    });
};