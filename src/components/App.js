import './App.css';
import LoginPage from './LoginPage'
import LandingPage from './LandingPage';
import { useState } from 'react';
import { Switch, Route } from "react-router-dom";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false)
  const helpLogin = () => {
    setIsLoggedIn(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage helpLogin={helpLogin}/>
        {isLoggedin?
        <LandingPage />:null}
      </header>
    </div>
  );
}

export default App;
