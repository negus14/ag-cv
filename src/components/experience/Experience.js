// src/components/Experience.js
import React from 'react';
import { salaryfinance, optal, fdm, lme } from '../import';
import  './Experience.css';

const Experience = () => {
  return (
    <div>
      <h1>Employment History</h1>
      <div className="experience-row">
            <div>          
            </div>
            <a href="https://www.salaryfinance.com/uk/" target="_blank" rel="noopener noreferrer">
              <img src={salaryfinance} alt="salaryfinance"/>
            </a>
            <a href="https://www.wexinc.com/industries/travel/" target="_blank" rel="noopener noreferrer">
              <img src={optal} alt="optal"/>
            </a>
            <a href="https://www.lme.com/en/" target="_blank" rel="noopener noreferrer">
              <img src={lme} alt="lme"/>
            </a>  
            <a href="https://www.fdmgroup.com/" target="_blank" rel="noopener noreferrer">
              <img src={fdm} alt="fdm"/>
            </a>     
      </div>
    </div>

  );
}

export default Experience;
