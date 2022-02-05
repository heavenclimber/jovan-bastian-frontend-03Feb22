import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLbX3k_HX1HQ24YVG1p_quVyI4AHwU9Us",
  authDomain: "jovan-bastian-frontend-03feb22.firebaseapp.com",
  databaseURL:
    "https://jovan-bastian-frontend-03feb22-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jovan-bastian-frontend-03feb22",
  storageBucket: "jovan-bastian-frontend-03feb22.appspot.com",
  messagingSenderId: "1038339248072",
  appId: "1:1038339248072:web:2543341f1e7a19918afafd",
  measurementId: "G-CDC9LPGG64",
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
