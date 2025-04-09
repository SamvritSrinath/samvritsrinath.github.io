import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import DarkModeToggle from './components/DarkModeToggle';
const App = () => {
  return (
    <Router>
      <Navigation />
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
