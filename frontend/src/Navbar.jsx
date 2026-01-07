import React from "react";
import "./Navbar.css";
import { FaFistRaised } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <FaFistRaised className="nav-icon" />
        <span className="brand-name">RASHI</span>
      </div>

      <nav className="nav-right">
        <a href="#about">About Me</a>
        <a href="#services">Services</a>
        <a href="#contact" className="nav-cta">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
