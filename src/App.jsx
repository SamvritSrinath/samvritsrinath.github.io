import { resumeData } from './data/resumeData';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { useTheme } from './hooks/useTheme';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', sans-serif;
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

function App() {
  const [theme, themeToggler] = useTheme();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <Router>
        <MainLayout theme={theme} toggleTheme={themeToggler}>
          <Routes>
            <Route path="/" element={<Home content={resumeData.main} />} />
            <Route path="/about" element={<About content={resumeData.about} />} />
            <Route path="/projects" element={<Projects content={resumeData.projects} />} />
            <Route path="/contact" element={<Contact content={resumeData.main.contact} />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
