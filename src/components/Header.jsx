import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useState} from 'react';
import {Link} from 'react-scroll';
import {Link as RouterLink, useLocation, useNavigate} from 'react-router-dom';
import {FaSun, FaMoon, FaHome, FaBars, FaTimes} from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${({theme}) => theme.headerBg};
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid ${({theme}) => theme.headerBorder};

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme}) => theme.accent};
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
`;

const RouterLogo = styled(RouterLink)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme}) => theme.accent};
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme}) => theme.headerBg};
  backdrop-filter: blur(20px);
  z-index: 1000;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({isOpen}) => (isOpen ? 'flex' : 'none')};
  }
`;

const MobileNavLink = styled(Link)`
  color: ${({theme}) => theme.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({theme}) => theme.accent};
  }
`;

const MobileNavRouterLink = styled(RouterLink)`
  color: ${({theme}) => theme.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({theme}) => theme.accent};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({theme}) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  color: ${({theme}) => theme.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${({theme}) => theme.accent};
    transition: width 0.3s ease;
  }

  &.active::after,
  &:hover::after {
    width: 100%;
  }
`;

const RouterStyledLink = styled(RouterLink)`
  color: ${({theme}) => theme.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${({theme}) => theme.accent};
    transition: width 0.3s ease;
  }

  &.active::after,
  &:hover::after {
    width: 100%;
  }
`;

const ResumeLink = styled.a`
  color: ${({theme}) => theme.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${({theme}) => theme.accent};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({theme}) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Header = ({theme, toggleTheme}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectArchive = location.pathname === '/project-archive';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
  };

  const handleLogoClick = () => {
    if (isProjectArchive) {
      navigate('/');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        {isProjectArchive ? (
          <RouterLogo to="/" onClick={handleLogoClick}>
            SS
          </RouterLogo>
        ) : (
          <Logo to="home" {...scrollProps}>
            SS
          </Logo>
        )}
        <Nav>
          {!isProjectArchive ? (
            <>
              <StyledLink to="home" activeClass="active" {...scrollProps}>
                Home
              </StyledLink>
              <StyledLink to="experience" activeClass="active" {...scrollProps}>
                Experience
              </StyledLink>
              <StyledLink to="skills" activeClass="active" {...scrollProps}>
                Skills
              </StyledLink>
              <StyledLink to="projects" activeClass="active" {...scrollProps}>
                Featured Works
              </StyledLink>
              <StyledLink to="research" activeClass="active" {...scrollProps}>
                Research
              </StyledLink>
              <StyledLink to="education" activeClass="active" {...scrollProps}>
                Education
              </StyledLink>
              <StyledLink to="teaching" activeClass="active" {...scrollProps}>
                Teaching
              </StyledLink>
              <StyledLink to="clubs" activeClass="active" {...scrollProps}>
                Clubs
              </StyledLink>
              <StyledLink to="contact" activeClass="active" {...scrollProps}>
                Contact
              </StyledLink>
            </>
          ) : (
            <>
              <RouterStyledLink to="/">
                <FaHome /> Home
              </RouterStyledLink>
              <RouterStyledLink to="/project-archive" className="active">
                Project Archive
              </RouterStyledLink>
            </>
          )}
          <ResumeLink
            href="/Samvrit_Srinath_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </ResumeLink>
        </Nav>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        <ThemeToggleButton onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </ThemeToggleButton>
      </HeaderContainer>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen}>
        {!isProjectArchive ? (
          <>
            <MobileNavLink to="home" onClick={closeMobileMenu} {...scrollProps}>
              Home
            </MobileNavLink>
            <MobileNavLink
              to="experience"
              onClick={closeMobileMenu}
              {...scrollProps}>
              Experience
            </MobileNavLink>
            <MobileNavLink
              to="skills"
              onClick={closeMobileMenu}
              {...scrollProps}>
              Skills
            </MobileNavLink>
            <MobileNavLink
              to="projects"
              onClick={closeMobileMenu}
              {...scrollProps}>
              Featured Works
            </MobileNavLink>
            <MobileNavLink
              to="research"
              onClick={closeMobileMenu}
              {...scrollProps}>
              Research
            </MobileNavLink>
            <MobileNavLink
              to="education"
              onClick={closeMobileMenu}
              {...scrollProps}>
              Education
            </MobileNavLink>
            <MobileNavLink
              to="teaching"
              onClick={closeMobileMenu}
              {...scrollProps}>
              Teaching
            </MobileNavLink>
            <MobileNavLink
              to="clubs"
              onClick={closeMobileMenu}
              {...scrollProps}>
              Clubs
            </MobileNavLink>
            <MobileNavLink
              to="contact"
              onClick={closeMobileMenu}
              {...scrollProps}>
              Contact
            </MobileNavLink>
          </>
        ) : (
          <>
            <MobileNavRouterLink to="/" onClick={closeMobileMenu}>
              <FaHome /> Home
            </MobileNavRouterLink>
            <MobileNavRouterLink
              to="/project-archive"
              onClick={closeMobileMenu}>
              Project Archive
            </MobileNavRouterLink>
          </>
        )}
        <ResumeLink
          href="/Samvrit_Srinath_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobileMenu}>
          Resume
        </ResumeLink>
      </MobileNav>
    </>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
