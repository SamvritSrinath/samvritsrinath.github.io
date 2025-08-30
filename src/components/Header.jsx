import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.headerBg};
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.headerBorder};
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none; // Basic mobile hiding, can be replaced with a burger menu
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${({ theme }) => theme.accent};
    transition: width 0.3s ease;
  }

  &.active::after,
  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Header = ({ theme, toggleTheme }) => {
  return (
    <HeaderContainer>
      <Logo to="/">SS</Logo>
      <Nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/projects">Projects</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </Nav>
      <ThemeToggleButton onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </ThemeToggleButton>
    </HeaderContainer>
  );
};

export default Header;
