import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-scroll';
import {Link as RouterLink, useLocation, useNavigate} from 'react-router-dom';
import {FaSun, FaMoon, FaHome} from 'react-icons/fa';

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

  return (
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
            <StyledLink to="clubs" activeClass="active" {...scrollProps}>
              Clubs
            </StyledLink>
            <StyledLink to="contact" activeClass="active" {...scrollProps}>
              Contact
            </StyledLink>
            <RouterStyledLink to="/project-archive">
              Project Archive
            </RouterStyledLink>
          </>
        ) : (
          <>
            <RouterStyledLink to="/" className="active">
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
      <ThemeToggleButton onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </ThemeToggleButton>
    </HeaderContainer>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
