import React from 'react';
import './App.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/sign-up"><SignUp /></Route>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
