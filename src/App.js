import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
 
  return (
    <Router>
      <header>
        
        <ul className="headerList">
          
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </header>
     
   
    
    
        <Route path="/" exact component={Home}/>
        <Route path="/projects" component={Projects}/> 
        <footer>
      <span id="stanko">Stankovski</span>
           © 2020 <br/>
          Aleksandar Stankovski
    </footer>
    </Router>
    
  );
}

export default App;
