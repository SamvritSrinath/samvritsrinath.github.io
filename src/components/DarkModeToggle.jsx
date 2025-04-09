import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 5rem;
  z-index: 1000;
  cursor: pointer;
  color: var(--dark-mode-text);

  @media (max-width: 768px) {
    right: 3rem;
  }
`;

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <ToggleContainer onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </ToggleContainer>
  );
};

export default DarkModeToggle;
