// src/components/Experience.js
import React from 'react';
import { salaryfinance, optal, fdm, lme } from './import';
import  './Experience.css';

const Experience = () => {
  return (
    <div className="experience-row">
          <a href="https://www.salaryfinance.com/uk/" target="_blank" rel="noopener noreferrer">
            <img src={salaryfinance} alt="SF"/>
          </a>
          <a href="https://www.wexinc.com/industries/travel/" target="_blank" rel="noopener noreferrer">
            <img src={optal} alt="Optal"/>
          </a>
          <a href="https://www.lme.com/en/" target="_blank" rel="noopener noreferrer">
            <img src={lme} alt="LME"/>
          </a>  
          <a href="https://www.fdmgroup.com/" target="_blank" rel="noopener noreferrer">
            <img src={fdm} alt="FDM"/>
          </a>     
    </div>
  );
}

export default Experience;
