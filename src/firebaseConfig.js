import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXub3Z6UPqofaDIOEPzmZ7rfFxPUn8iqY",
  authDomain: "assignment-rc.firebaseapp.com",
  projectId: "assignment-rc",
  storageBucket: "assignment-rc.appspot.com",
  messagingSenderId: "176587886144",
  appId: "1:176587886144:web:1f7d32082c2db2450e59a5",
  measurementId: "G-E59JYS5LT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
