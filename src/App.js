// src/App.js
import React from 'react';
import { 
  Header, 
  Skill,
  IntroductionF
} from './components';
import { 
  Navbar, 
  Footer 
} from './containers';
import './App.css';  // Add custom styling if necessary

function App() {
  return (
    <div className="App">
      <div className="Top">
        <Navbar/>
        <Introduction />

      </div>
      <Skill />
    </div>
  );
}

export default App;
