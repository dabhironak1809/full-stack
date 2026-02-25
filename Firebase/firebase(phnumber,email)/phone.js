
// ===== STEP 1: Import Firebase =====

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

// ===== STEP 2: Your Firebase project details =====

const firebaseConfig = {
  apiKey: "AIzaSyA49k5CCGKkHBUoA-JCKhopULmdhU4o8Zo",
  authDomain: "fir-project-f7c02.firebaseapp.com",
  projectId: "fir-project-f7c02",
  messagingSenderId: "181628719085",
  appId: "1:181628719085:web:408fc5b8e47c9cdc2961e4"
};

// ===== STEP 3: Start Firebase =====

const app = initializeApp(firebaseConfig);
// ===== STEP 4: Start Authentication =====
const auth = getAuth(app);

// ===== STEP 5: Setup Google security (reCAPTCHA) =====
// Firebase needs this to stop fake users

window.recaptchaVerifier = new RecaptchaVerifier(
  auth,
  "recaptcha-container",
  { size: "invisible" }
);

// ===== STEP 6: Send OTP =====
window.sendOTP = function () {

  // Get phone number from input box
  const phoneNumber = document.getElementById("phone").value;

  // Phone number must start with +
  if (!phoneNumber.startsWith("+")) {
    alert("Use format: +919876543210");
    return;
  }

  // Ask Firebase to send OTP
  signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
    .then(function (result) {
      window.confirmationResult = result;
      alert("OTP sent to your phone!");
    })
    .catch(function (error) {
      alert(error.message);
    });
};

// ===== STEP 7: Verify OTP =====
window.verifyOTP = function () {

  // Get OTP from input box
  const otp = document.getElementById("otp").value;

  // Ask Firebase to verify OTP
  window.confirmationResult.confirm(otp)
    .then(function () {
      alert("Phone number verified successfully!");
      const phoneNumber = document.getElementById("phone").value;

      // 1.  first method to redirect another page 
      // window.location.href = "phone.html";

      window.location.href =
        "phone.html?phone=" + encodeURIComponent(phoneNumber);

      // second 
      // window.location.href = "phone.html";

    })
    .catch(function (error) {
      alert("Wrong OTP");
    });
};
