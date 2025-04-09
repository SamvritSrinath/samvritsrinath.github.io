import React, {useState, useEffect} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props =>
    props.isScrolled
      ? 'var(--dark-mode-bg)'
      : 'transparent'}; // Dark mode background color
  padding: 1rem 0;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
  color: var(--dark-mode-text);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--dark-mode-text);
  cursor: pointer;
  position: relative;
  font-family: var(--font-family-headings);

  &.active {
    font-weight: bold;
    color: var(--accent-color);

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--accent-color);
    }
  }

  &:hover {
    color: var(--primary-color);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--dark-mode-text);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const MobileNavList = styled.ul`
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: var(--dark-mode-bg);
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;

  &.open {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MobileNavItem = styled.li`
  margin: 1rem 0;
`;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavigationContainer isScrolled={isScrolled}>
      <MobileMenuButton onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>
      <NavList>
        <NavItem>
          <NavLink
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active">
            Hero
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active">
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active">
            Experience
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="research"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active">
            Research
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active">
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active">
            Contact
          </NavLink>
        </NavItem>
      </NavList>
      <MobileNavList className={isMobileMenuOpen ? 'open' : ''}>
        <MobileNavItem>
          <NavLink
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggleMobileMenu}>
            Hero
          </NavLink>
        </MobileNavItem>
        <MobileNavItem>
          <NavLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggleMobileMenu}>
            About
          </NavLink>
        </MobileNavItem>
        <MobileNavItem>
          <NavLink
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggleMobileMenu}>
            Skills
          </NavLink>
        </MobileNavItem>
        <MobileNavItem>
          <NavLink
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggleMobileMenu}>
            Experience
          </NavLink>
        </MobileNavItem>
        <MobileNavItem>
          <NavLink
            to="research"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggleMobileMenu}>
            Research
          </NavLink>
        </MobileNavItem>
        <MobileNavItem>
          <NavLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggleMobileMenu}>
            Projects
          </NavLink>
        </MobileNavItem>
        <MobileNavItem>
          <NavLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggleMobileMenu}>
            Contact
          </NavLink>
        </MobileNavItem>
      </MobileNavList>
    </NavigationContainer>
  );
};

export default Navigation;
