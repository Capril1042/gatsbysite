import db from "./firebase"

export default function deleteProject(id) {
    db.collection('projects').doc(id).delete();
};