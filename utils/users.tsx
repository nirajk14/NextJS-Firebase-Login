import {db} from "./firebase"
import { collection, getDocs } from "firebase/firestore"; 

const getUsers = async () => {
    const snapshot=await getDocs(collection(db,"users"));
    snapshot.docs.forEach((docs)=>console.log(docs.data()));

};

export {getUsers};