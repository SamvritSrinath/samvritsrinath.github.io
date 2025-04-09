import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 4rem 0;
  background-color: var(--dark-mode-bg);
  color: var(--dark-mode-text);
  font-family: var(--font-family-base);
`;

const SkillsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-family: var(--font-family-headings);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const CategoryHeading = styled.h3`
  font-size: 1.2rem;
  font-family: var(--font-family-headings);
  margin-bottom: 0.5rem;
  color: var(--accent-color);
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsContent>
        <Heading>Skills</Heading>
        <SkillCategories>
          <SkillCategory>
            <CategoryHeading>Languages</CategoryHeading>
            <SkillList>
              <SkillItem>Python</SkillItem>
              <SkillItem>C++</SkillItem>
              <SkillItem>Java</SkillItem>
              <SkillItem>JavaScript</SkillItem>
              {/* Add more languages */}
            </SkillList>
          </SkillCategory>
          <SkillCategory>
            <CategoryHeading>Frameworks/Libraries</CategoryHeading>
            <SkillList>
              <SkillItem>React</SkillItem>
              <SkillItem>Node.js</SkillItem>
              <SkillItem>PyTorch</SkillItem>
              <SkillItem>TensorFlow</SkillItem>
              {/* Add more frameworks */}
            </SkillList>
          </SkillCategory>
          <SkillCategory>
            <CategoryHeading>Tools</CategoryHeading>
            <SkillList>
              <SkillItem>Git</SkillItem>
              <SkillItem>Docker</SkillItem>
              <SkillItem>AWS</SkillItem>
              <SkillItem>SQL</SkillItem>
              {/* Add more tools */}
            </SkillList>
          </SkillCategory>
        </SkillCategories>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;
