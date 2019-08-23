/* function takes in a collection type (project or blog), an id
and an object. It updates the document in said collection type
in the firebase database */

import db from "./firebase"

export default function updateDocument(type, id, object) {
    db.collection(type).doc(id).set(
       object
    );
};