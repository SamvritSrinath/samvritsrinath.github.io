import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useTheme} from './hooks/useTheme';
import MainLayout from './layouts/MainLayout';
import {OptimizedCosmicBackground} from './components/space/OptimizedCosmicBackground';
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
// const UCSDPage = lazy(() => import('./pages/UCSDPage'));

function App() {
  const {theme} = useTheme();

  return (
    <>
      <OptimizedCosmicBackground />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout theme={theme}>
                <Suspense fallback={<HomeSkeleton />}>
                  <Home content={resumeData.main} />
                </Suspense>
                <section id="experience">
                  <Suspense fallback={<TimelineSkeleton />}>
                    <About
                      content={{
                        ...resumeData.about,
                        workExperience: resumeData.workExperience,
                      }}
                    />
                  </Suspense>
                </section>
                <section id="skills">
                  <Suspense fallback={<SkillsSkeleton />}>
                    <Skills />
                  </Suspense>
                </section>
                <section id="featured-works">
                  <Suspense fallback={<ProjectsSkeleton />}>
                    <Projects
                      content={resumeData.projects
                        .filter(p => p.featured)
                        .slice(0, 4)}
                    />
                  </Suspense>
                </section>
                <section id="research">
                  <Suspense fallback={<PublishedResearchSkeleton />}>
                    <PublishedResearch />
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
          <Route
            path="/ucsd"
            element={
              <MainLayout theme={theme}>
                <Suspense fallback={<UCSDSkeleton />}>
                  <UCSD
                    teaching={resumeData.teaching}
                    clubs={resumeData.clubs}
                  />
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
