import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <span className="logo-text">Nicole</span>
        <span className="logo-icon">👓</span>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* CV Button */}
      <a
        href="/Nicole-Alejandro-CV.pdf"
        className="navbar-cv"
        target="_blank"
        rel="noopener noreferrer"
      >
        View CV
      </a>
    </nav>
  );
}

export default Navbar;
