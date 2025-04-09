import React from 'react';
import {NavLink} from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css'; // Create this CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">Samvrit Srinath</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({isActive}) => (isActive ? 'active' : '')}>
          About
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({isActive}) => (isActive ? 'active' : '')}>
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({isActive}) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </div>
      <div className="navbar-toggle">
        <ThemeToggle />
      </div>
    </nav>
  );
};

// Add basic Navbar.css or integrate styles into App.css/index.css
// Example Navbar.css
/*
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background-color: var(--nav-bg); color: var(--nav-text); }
.navbar-brand a { font-weight: bold; text-decoration: none; color: inherit; }
.navbar-links a { margin-left: 1rem; text-decoration: none; color: inherit; }
.navbar-links a.active { font-weight: bold; text-decoration: underline; }
*/

export default Navbar;
