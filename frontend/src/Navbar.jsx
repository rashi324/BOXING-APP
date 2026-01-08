import React from "react";
import "./Navbar.css";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Logo size={32} />
        <span className="brand-name">RASHI</span>
      </div>

      <nav className="nav-right">
        <a href="#about">About</a>
        <a href="#services">Service</a>
        <a href="#contact" className="nav-cta">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar; // ✅ THIS LINE IS REQUIRED
