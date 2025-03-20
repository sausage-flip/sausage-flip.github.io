// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW9xdFdxFSjAm15f-l107fQpmZbs6_vEw",
  authDomain: "trolling-e3ed8.firebaseapp.com",
  databaseURL: "https://trolling-e3ed8-default-rtdb.firebaseio.com",
  projectId: "trolling-e3ed8",
  storageBucket: "trolling-e3ed8.appspot.com",
  messagingSenderId: "299260439019",
  appId: "1:299260439019:web:9dedc986334a871e1d51ae",
  measurementId: "G-5KJC7Z17M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
