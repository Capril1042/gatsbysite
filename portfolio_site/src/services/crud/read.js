import { useState, useEffect } from "react"

import db from "../services/firebase"

export default function useProject(type, id){
    const [data, setData] = useState([]);


    useEffect(()=> {
        db.collection(type).doc(id)
        .get()
        .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log('Document data:', doc.data());
              const newData = doc.data();
              setData(newData);
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          });
    }, []);
    
    return data
}