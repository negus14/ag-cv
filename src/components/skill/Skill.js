import React from 'react';
import { csharp, dotnet, mssql, mysql, aws, vue, javascript, nodejs, react, python, cpp, flutter, java } from '../import';
import './Skill.css';

const Skill = () => {
  return (
    <div className="skill">
      
      {/* Commercial XP Section */}
      <div>
        <h2>Commercial Language Experience</h2>
      </div>
      <div className="skill-row">
        <div className="skill-item"><img src={csharp} alt="C#" /></div>
        <div className="skill-item"><img src={dotnet} alt=".NET" /></div>
        <div className="skill-item"><img src={mssql} alt="MSSQL" /></div>
        <div className="skill-item"><img src={mysql} alt="MySQL" /></div>
        <div className="skill-item"><img src={aws} alt="AWS" /></div>
        <div className="skill-item"><img src={vue} alt="Vue.js" /></div>
        <div className="skill-item"><img src={javascript} alt="JavaScript" /></div>
        <div className="skill-item"><img src={nodejs} alt="Node.js" /></div>
      </div>
      <div>
        <h2>Recreational Language Experience</h2>
      </div>
      {/* Recreational XP Section */}
      <div className="skill-row">
        <div className="skill-item"><img src={react} alt="React" /></div>
        <div className="skill-item"><img src={python} alt="Python" /></div>
        <div className="skill-item"><img src={cpp} alt="C++" /></div>
        <div className="skill-item"><img src={flutter} alt="Flutter" /></div>
        <div className="skill-item"><img src={java} alt="Java" /></div>
      </div>

    </div>
  );
}

export default Skill;