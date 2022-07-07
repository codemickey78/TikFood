import { getAuth } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { fireauth, firestore } from "../environments/config";

const publishPost = () => {
    const userId = getAuth().currentUser?.uid
}

export { publishPost }