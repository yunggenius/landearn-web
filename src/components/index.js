import React from 'react';
import "./main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './login';
import Home from './home';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Login} />
    </Router>
  );
    
}

export default App;