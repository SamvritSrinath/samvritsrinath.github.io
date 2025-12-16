import {lazy, Suspense, useMemo} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useTheme} from './hooks/useTheme';
import MainLayout from './layouts/MainLayout';
import NetworkBackground from './components/NetworkBackground';
import {resumeData} from './data/resumeData';

// Skeleton loaders
import HomeSkeleton from './components/skeletons/HomeSkeleton';
import TimelineSkeleton from './components/skeletons/TimelineSkeleton';
import SkillsSkeleton from './components/skeletons/SkillsSkeleton';
import ProjectsSkeleton from './components/skeletons/ProjectsSkeleton';
import PublishedResearchSkeleton from './components/skeletons/PublishedResearchSkeleton';
import UCSDSkeleton from './components/skeletons/UCSDSkeleton';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectArchive = lazy(() => import('./pages/ProjectArchive'));
const PublishedResearch = lazy(() =>
  import('./components/sections/PublishedResearch').then(module => ({
    default: module.PublishedResearch,
  })),
);
const Skills = lazy(() => import('./components/Skills'));
const UCSD = lazy(() => import('./components/UCSD'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));

function App() {
  const {theme} = useTheme();

  const networkTheme = useMemo(
    () => ({
      text: theme === 'dark' ? '#FAFAFA' : '#1a1a1a',
      accent: '#3498db',
    }),
    [theme],
  );

  return (
    <>
      <NetworkBackground theme={networkTheme} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout theme={theme}>
                <section id="home" className="min-h-screen">
                  <Suspense fallback={<HomeSkeleton />}>
                    <Home content={resumeData.main} />
                  </Suspense>
                </section>
                <section id="experience" className="min-h-[600px]">
                  <Suspense fallback={<TimelineSkeleton />}>
                    <About
                      content={{
                        ...resumeData.about,
                        workExperience: resumeData.workExperience,
                      }}
                    />
                  </Suspense>
                </section>
                <section id="skills" className="min-h-[400px]">
                  <Suspense fallback={<SkillsSkeleton />}>
                    <Skills />
                  </Suspense>
                </section>
                <section id="featured-works" className="min-h-[800px]">
                  <Suspense fallback={<ProjectsSkeleton />}>
                    <Projects
                      content={resumeData.projects
                        .filter(p => p.featured)
                        .slice(0, 4)}
                    />
                  </Suspense>
                </section>
                <section id="research" className="min-h-[600px]">
                  <Suspense fallback={<PublishedResearchSkeleton />}>
                    <PublishedResearch />
                  </Suspense>
                </section>
                <section id="ucsd" className="min-h-[600px]">
                  <Suspense fallback={<UCSDSkeleton />}>
                    <UCSD
                      teaching={resumeData.teaching}
                      clubs={resumeData.clubs}
                    />
                  </Suspense>
                </section>
              </MainLayout>
            }
          />
          <Route
            path="/projects"
            element={
              <MainLayout theme={theme}>
                <Suspense fallback={<ProjectsSkeleton />}>
                  <ProjectArchive />
                </Suspense>
              </MainLayout>
            }
          />
          <Route
            path="/research"
            element={
              <MainLayout theme={theme}>
                <Suspense fallback={<PublishedResearchSkeleton />}>
                  <ResearchPage />
                </Suspense>
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
