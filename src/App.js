// src/App.js
import React from 'react';
import { 
  Skill,
  Introduction
} from './components';
import { 
  Navbar
} from './containers';
import './App.css';  // Add custom styling if necessary

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Introduction />

      <Skill />
    </div>
  );
}

export default App;
