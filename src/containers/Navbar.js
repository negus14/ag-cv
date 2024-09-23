import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css'; // Importing CSS for styles
import { FaLinkedin, FaFileDownload, FaGithub, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {

  return (
    <div className="navbar">
        <a href="https://linkedin.com/in/abel-ghebrezadik" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="#0077b5" title="LinkedIn" />
        </a>
        <a href="/assets/Abel Ghebrezadik.pdf" target="_blank" rel="noopener noreferrer">
          <FaFileDownload size={24} color="#4CAF50" title="Download CV" />
        </a>
        <a href="https://github.com/negus14" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color="#333" title="GitHub" />
        </a>
        <a href="mailto:abel_g@hotmail.co.uk">
          <FaEnvelope size={24} color="#D44638" title="Email" />
        </a>
    </div>
  );
};

export default Navbar;
