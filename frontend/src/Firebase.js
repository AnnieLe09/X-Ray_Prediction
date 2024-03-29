//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCWJZ2bV570Z4HWrZUfkNY8Vo-TJnnRFis",
    authDomain: "coco-230de.firebaseapp.com",
    projectId: "coco-230de",
    storageBucket: "coco-230de.appspot.com",
    messagingSenderId: "573979351614",
    appId: "1:573979351614:web:b63d941ef47e5aa157cf6f",
    measurementId: "G-ZQXS9DY493"
};
const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);
//import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js";
export { storage, firebase as default };