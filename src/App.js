import Event from "./components/Event";
import Feed from "./components/Feed";
import Blog from "./components/BlogandTutorialCards";
import React, { useState } from 'react';
import './main.css'; // Import your global CSS for styling
import UpperNavigation from './components/UpperNavigation';
import BottomNavigation from './components/BottomNavigation';
import Upload from "./components/Upload";
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyBe34X8AWqGxohZxiBK9xzniFuPlrNWrCI",
  authDomain: "web-app-react-fotopia.firebaseapp.com",
  databaseURL: "https://web-app-react-fotopia-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "web-app-react-fotopia",
  storageBucket: "web-app-react-fotopia.appspot.com",
  messagingSenderId: "839890748174",
  appId: "1:839890748174:web:79cc15ce83c7c27c6f0d5f",
  measurementId: "G-TL90Y5ET4N"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function App() {
  const [activeButton, setActiveButton] = useState('feed');

  return (
    <div className="App">
      {activeButton !== "upload" && <UpperNavigation handleClick={setActiveButton} activeButton={activeButton} />}
      {activeButton === "feed" && <Feed />}
      {activeButton === "events" && <Event />}
      {activeButton === "blog" && <Blog />}
      {activeButton === "upload" && <Upload firebase={app} />}
      <BottomNavigation handleClick={setActiveButton} />
      {/* Other components can be added here as needed */}
    </div>
  );
}

export default App;


