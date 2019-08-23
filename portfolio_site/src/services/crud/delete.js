/* function takes in a collection type (project or blog)
 and an id, and deletes the document from the firbase database */
import db from "./firebase"

export default function deleteDocument(type,id) {
    db.collection(type).doc(id).delete();
};