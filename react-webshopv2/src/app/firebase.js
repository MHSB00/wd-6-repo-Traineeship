import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBX4Jyhj0WYZHgVSowJ5lPzxC6SNx7y4EY",
    authDomain: "react-webshop-39ffe.firebaseapp.com",
    projectId: "react-webshop-39ffe",
    storageBucket: "react-webshop-39ffe.appspot.com",
    messagingSenderId: "763958262580",
    appId: "1:763958262580:web:b9522c1f63ae618da3c361"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);