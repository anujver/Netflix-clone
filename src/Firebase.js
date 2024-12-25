import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAUVE2GGr9SNitzx58vfk6euX5iUc91D4I",
  authDomain: "netflix-clone-6b67d.firebaseapp.com",
  projectId: "netflix-clone-6b67d",
  storageBucket: "netflix-clone-6b67d.appspot.com",
  messagingSenderId: "786503025039",
  appId: "1:786503025039:web:1d4543a72176f313990bfa"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password)=> {
try {
   const res = await createUserWithEmailAndPassword(auth, email, password );
   const user = res.user;
   await addDoc (collection(db, "user"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email,
   })
} catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
}
}

const login = async(email, password) => {
     try {
       await signInWithEmailAndPassword(auth, email, password);
     } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
     }
}

const logout = ()=> {
    signOut(auth);
}

export {auth, db, login, signup, logout};