import { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import BeerMenu from './BeerMenu';
import LoginPage from './LoginPage'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/">
            <BeerMenu />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
