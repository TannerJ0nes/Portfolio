import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/works">Works</Link> {/* Add the new link */}
      </nav>
      <div className="logo">
        <img src={'./R.png'} alt="Logo" /> {/* Use the imported image */}
      </div>
      <Link to="/contact">
      <button className="button-30" role="button">Contact Me</button>
      </Link>
    </header>
  );
}

export default Header;
