// import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import NavBar from './components/navbar';

function App() {
  
  return (
    <>
      <NavBar />
      <Home/>
      <Projects />  
      <About />
      <Contact />
    </>
  )
}

export default App;