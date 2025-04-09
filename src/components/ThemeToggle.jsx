import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {FaSun, FaMoon} from 'react-icons/fa'; // Using react-icons

const ThemeToggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button"
      aria-label="Toggle theme">
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

// Add basic styling for the button
// Example in App.css or index.css
/*
.theme-toggle-button { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--nav-text); }
*/

export default ThemeToggle;
