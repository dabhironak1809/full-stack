// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword
// } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA49k5CCGKkHBUoA-JCKhopULmdhU4o8Zo",
    authDomain: "fir-project-f7c02.firebaseapp.com",
    projectId: "fir-project-f7c02",
    messagingSenderId: "181628719085",
    appId: "1:181628719085:web:408fc5b8e47c9cdc2961e4"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

console.log("consol :1 ");

window.registerWithEmail = function () {
    console.log("register :2 ");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("please enter both email and password");
        return;
    }
    console.log("register :3 ");

    createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
        alert("register succesfully")
        console.log(userCredential.user);
    }).catch(error => {
        alert(error.message)
    });
    console.log("register :4 ");
};

console.log("consol :5 ");

window.loginWithEmail = function () {

    console.log("login :6 ");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("please enter both email and password ")
        return;
    }

    console.log("login :7 ");

    signInWithEmailAndPassword(auth, email, password).then(userCredential => {
        console.log("sign in email pass :8 ");

        alert("login succesful");
        console.log(userCredential.user);
        window.location.href="email.html";

      

    }).catch(error => {
        alert(error.message);
    })
    console.log("sign in email pass :9 ");

}

