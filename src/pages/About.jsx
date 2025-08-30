import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Section = styled(motion.section)`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.accent};
  display: inline-block;
`;

const EducationInfo = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const University = styled.h3`
  font-size: 1.8rem;
  margin: 0;
`;

const Degree = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: ${({ theme }) => theme.subtext};
  margin: 0.5rem 0;
`;

const Duration = styled.p`
  font-weight: 500;
  margin: 0.5rem 0;
`;

const Details = styled.p`
  margin: 0.5rem 0 1.5rem;
`;

const CoursesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CourseItem = styled.li`
  background: ${({ theme }) => theme.body};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.accent};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillItem = styled.li`
  background: ${({ theme }) => theme.body};
  padding: 0.5rem 1rem;
  border-radius: 6px;
`;

const ExperienceTimeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.accent};
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    border: 2px solid ${({ theme }) => theme.body};
  }
`;

const Role = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const Company = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  color: ${({ theme }) => theme.subtext};
  margin: 0.25rem 0;
`;

const DescriptionList = styled.ul`
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.subtext};
`;

const About = ({ content }) => {
  const { education, skills, experience } = content;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <AboutContainer>
      <Section variants={sectionVariants} initial="hidden" animate="visible">
        <SectionTitle>Education</SectionTitle>
        <EducationInfo>
          <University>{education.university}</University>
          <Degree>{education.degree}</Degree>
          <Duration>{education.duration}</Duration>
          <Details>{education.details}</Details>
          <h4>Relevant Coursework:</h4>
          <CoursesList>
            {education.courses.map((course, index) => (
              <CourseItem key={index}>{course}</CourseItem>
            ))}
          </CoursesList>
        </EducationInfo>
      </Section>

      <Section variants={sectionVariants} initial="hidden" animate="visible">
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <CategoryTitle>Languages</CategoryTitle>
            <SkillList>
              {skills.languages.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
          <SkillCategory>
            <CategoryTitle>Technologies</CategoryTitle>
            <SkillList>
              {skills.technologies.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
          <SkillCategory>
            <CategoryTitle>Libraries & Tools</CategoryTitle>
            <SkillList>
              {skills.librariesAndTools.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
          <SkillCategory>
            <CategoryTitle>Cloud Services</CategoryTitle>
            <SkillList>
              {skills.cloudServices.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        </SkillsGrid>
      </Section>

      <Section variants={sectionVariants} initial="hidden" animate="visible">
        <SectionTitle>Experience</SectionTitle>
        <ExperienceTimeline>
          {experience.map((job, index) => (
            <ExperienceItem key={index}>
              <Role>{job.role}</Role>
              <Company>{job.company} | {job.duration}</Company>
              <DescriptionList>
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </DescriptionList>
            </ExperienceItem>
          ))}
        </ExperienceTimeline>
      </Section>
    </AboutContainer>
  );
};

export default About;
