// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC19L-Q5bmY1OkDZ_dHmz1E_QPzrVu2ZOM",
  authDomain: "authentication-project-1-6402d.firebaseapp.com",
  projectId: "authentication-project-1-6402d",
  storageBucket: "authentication-project-1-6402d.firebasestorage.app",
  messagingSenderId: "747661712765",
  appId: "1:747661712765:web:1f7a7cce8cec310e89c014",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const SignUp = async (name,email, password) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
    }
        
    )
}

const SignIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const logOut = () => {
    signOut(auth);
}

export { auth, db, logOut, SignIn, SignUp };
