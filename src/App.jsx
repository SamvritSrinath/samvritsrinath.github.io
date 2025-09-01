import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {lightTheme, darkTheme} from './styles/theme';
import {useTheme} from './hooks/useTheme';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import AllProjects from './pages/AllProjects';
import Research from './pages/Research';
import Contact from './pages/Contact';
import NetworkBackground from './components/NetworkBackground';
import {resumeData} from './data/resumeData';
import Skills from './components/Skills';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family: 'Inter', sans-serif;
    transition: background-color 0.5s, color 0.5s;
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
      <NetworkBackground theme={selectedTheme} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout theme={theme} toggleTheme={themeToggler}>
                <section id="home">
                  <Home content={resumeData.main} />
                </section>
                <section id="experience">
                  <About
                    content={{
                      ...resumeData.about,
                      workExperience: resumeData.workExperience,
                      clubs: resumeData.clubs,
                    }}
                  />
                </section>
                <section id="skills">
                  <Skills skills={resumeData.about.skills} />
                </section>
                <section id="projects">
                  <Projects content={resumeData.projects} />
                </section>
                <section id="research">
                  <Research
                    content={resumeData.research}
                    projects={resumeData.projects}
                  />
                </section>
                <section id="education">
                  <About
                    content={{
                      ...resumeData.about,
                      workExperience: resumeData.workExperience,
                      clubs: resumeData.clubs,
                    }}
                    showEducationOnly={true}
                  />
                </section>
                <section id="clubs">
                  <About
                    content={{
                      ...resumeData.about,
                      workExperience: resumeData.workExperience,
                      clubs: resumeData.clubs,
                    }}
                    showClubsOnly={true}
                  />
                </section>
                <section id="contact">
                  <Contact
                    content={resumeData.main.contact}
                    theme={selectedTheme}
                  />
                </section>
              </MainLayout>
            }
          />
          <Route
            path="/project-archive"
            element={
              <MainLayout theme={theme} toggleTheme={themeToggler}>
                <AllProjects
                  content={resumeData.projects.filter(p => !p.featured)}
                />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
