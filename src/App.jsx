// import React from 'react';
import './App.css';
import About from './components/About';
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
    </>
  )
}

export default App;