import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import Aos from 'aos'
import 'aos/dist/aos.css'



function App() {

  return (
    <Router>
      <Header/>{/* The header contains the logo and the menu */}
      <Switch>
        <Route path='/'>
        <div className='app'>
          {/* <Header/>The header contains the logo and the menu */}
          <Hero></Hero>
          <About></About>
          <Projects></Projects>
          <Contact/>
          
        </div>
        </Route>
      </Switch>
    </Router> 
    
  );
  }

export default App;
