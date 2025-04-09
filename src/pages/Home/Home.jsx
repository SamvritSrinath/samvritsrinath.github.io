import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';
import Research from '../../components/Research/Research';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const HomePageContainer = styled.div`
  /* You can add specific styles for the home page if needed */
`;

const Home = () => {
  return (
    <HomePageContainer>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Research />
      <Projects />
      <Contact />
      <Footer />
    </HomePageContainer>
  );
};

export default Home;
