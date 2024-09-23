import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css'; // Importing CSS for styles

const Navbar = () => {

  return (
    <div className="navbar">
            <p><a href="https://linkedin.com/in/abel-ghebrezadik">LinkedIn</a></p>
            <p><a href="/assets/Abel Ghebrezadik.docx" target="_blank" rel="noopener noreferrer">Download CV</a></p>
            <p><a href="https://github.com/negus14" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p><a href="mailto:abel_g@hotmail.co.uk">Contact via Email</a></p>
    </div>
  );
};

export default Navbar;
