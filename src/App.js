import React from 'react';
import './App.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Swith, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <switch>
          <Route path="/login"><Login /></Route>
          <Route path="/sign-up"><SignUp /></Route>
          <Route path="/dashboard"><Dashboard/></Route>
        </switch>
      </Router>

    </div>
  );
}

export default App;
