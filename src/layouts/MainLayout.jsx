import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainContent = styled.main`
  flex: 1;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainLayout = ({ children, theme, toggleTheme }) => {
  return (
    <LayoutContainer>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default MainLayout;