import logo from './logo.svg';
import './App.css';
import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Navbar from './components/Navbar';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDhbvqar9DUQjDqbjTpztmOuMKz0OS8Bg8",
  authDomain: "u-universe.firebaseapp.com",
  projectId: "u-universe",
  storageBucket: "u-universe.appspot.com",
  messagingSenderId: "769321973541",
  appId: "1:769321973541:web:c12af142520d7cddcecccc",
  measurementId: "G-GVR4D9F52B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
