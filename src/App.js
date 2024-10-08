// src/App.js
import React from 'react';
import { Header, Experience, Skill } from './components';
import { Navbar, Footer } from './containers';
import './App.css';  // Add custom styling if necessary

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Experience/>
      <Skill />
      <Footer/>
    </div>
  );
}

export default App;
