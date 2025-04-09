import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import {ThemeContext} from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import './assets/styles/App.css'; // Import App specific styles

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <ScrollToTop /> {/* Ensure scroll to top on navigation */}
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* Optional: Add a 404 Not Found Route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
