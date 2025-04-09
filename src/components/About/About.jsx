import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 0;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: var(--font-family-base);
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-family: var(--font-family-headings);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <Heading>About Me</Heading>
        <Paragraph>
          {/* Replace with your professional summary from your resume */}A
          highly motivated and results-oriented Computer Science professional
          with a strong foundation in software development, algorithms, and data
          structures. Proven ability to learn quickly, adapt to new
          technologies, and work effectively in team environments. Passionate
          about leveraging technology to solve complex problems and create
          innovative solutions. Eager to contribute expertise and drive to a
          challenging and rewarding role.
        </Paragraph>
        <Paragraph>
          {/* Add a personal touch */}
          Beyond coding, I'm an avid hiker and enjoy exploring new trails. I'm
          also a big fan of science fiction and enjoy discussing the latest
          books and movies with friends.
        </Paragraph>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
