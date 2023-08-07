// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9CeBtQzYkrshZEN_xrxvdPyFIpTrKHCk",
  authDomain: "event-planner-96c54.firebaseapp.com",
  projectId: "event-planner-96c54",
  storageBucket: "event-planner-96c54.appspot.com",
  messagingSenderId: "623324068186",
  appId: "1:623324068186:web:8785bd7f919f3bba67db63",
  measurementId: "G-RM29HSYN2H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const appAuth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
