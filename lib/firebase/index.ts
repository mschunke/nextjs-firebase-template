// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// TODO: Copy your firebase config here
const firebaseConfig = {
	apiKey: "COPY YOUR FIREBASE CONFIG HERE",
	authDomain: "COPY YOUR FIREBASE CONFIG HERE",
	projectId: "COPY YOUR FIREBASE CONFIG HERE",
	storageBucket: "COPY YOUR FIREBASE CONFIG HERE",
	messagingSenderId: "COPY YOUR FIREBASE CONFIG HERE",
	appId: "COPY YOUR FIREBASE CONFIG HERE",
	measurementId: "COPY YOUR FIREBASE CONFIG HERE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
