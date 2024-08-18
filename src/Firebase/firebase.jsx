import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDhKjrNAZWPw7Ozn4idO_BXTQVx7rSxP4",
  authDomain: "my-project-f2fd0.firebaseapp.com",
  projectId: "my-project-f2fd0",
  storageBucket: "my-project-f2fd0.appspot.com",
  messagingSenderId: "22659048600",
  appId: "1:22659048600:web:cf9c64c4579379e7eadced",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;
