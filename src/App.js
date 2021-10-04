import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgJlUPMKGzwR3m2ojpWVMKmzM4cFUcJxw",
  authDomain: "test-461d5.firebaseapp.com",
  databaseURL: "https://test-461d5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-461d5",
  storageBucket: "test-461d5.appspot.com",
  messagingSenderId: "838791830786",
  appId: "1:838791830786:web:fd88b8c89e39f77c49361b",
  measurementId: "G-W3S4J4DG3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
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
