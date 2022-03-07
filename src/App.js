import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Detail from './routes/Detail';
import Home from "./routes/Home" 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Detail/:id">
          <Detail/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
