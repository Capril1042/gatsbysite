/* function takes in a collection type (project or blog)
 and adds the object as a document in said collection type
 to the firebase database */

import db from "./firebase"

export default function createDocument(type, object) {
    db.collection(type).add(
        object
    );
};