import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {TimelineRuler} from '../components/features/TimelineRuler';

const MainLayout = ({children, theme}) => {
  const location = useLocation();
  const shouldShowSidebar = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        Skip to main content
      </a>
      <Header theme={theme} />
      {shouldShowSidebar && <TimelineRuler />}
      <main id="main-content" className="flex-1 relative" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
};

export default MainLayout;
