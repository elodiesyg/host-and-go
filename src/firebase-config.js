import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAryL3XrbyVqD4iq_8X5hqUy3iFRs567i4",
    authDomain: "host-and-go.firebaseapp.com",
    projectId: "host-and-go",
    storageBucket: "host-and-go.appspot.com",
    messagingSenderId: "345259792323",
    appId: "1:345259792323:web:ac1066ab856d4f4552cf76",
    measurementId: "G-PVXV3DYCHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();