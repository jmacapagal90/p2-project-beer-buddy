import './App.css';
import LoginPage from './LoginPage'
import Home from './Home';
import { useState } from 'react';
import { Switch, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Route path="/">
            <Home />
          </Route>
      </header>
    </div>
  );
}

export default App;
