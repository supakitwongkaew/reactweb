import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/main';
import Chapter1 from './pages/Chapter1';



function App() {
  return (
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/chapter1'component={Chapter1} />
          
        </Switch>
      </Router>  
      </>
  );
}

export default App;
