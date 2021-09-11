import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
	apiKey: "AIzaSyDfDqz0ysvMeBRu4G6o-BbudenCkBhbyUI",
	authDomain: "findus-642fe.firebaseapp.com",
	projectId: "findus-642fe",
	storageBucket: "findus-642fe.appspot.com",
	messagingSenderId: "76051878548",
	appId: "1:76051878548:web:78b78a00c016583faa5a81",
});

export const auth = app.auth();
export default app;
