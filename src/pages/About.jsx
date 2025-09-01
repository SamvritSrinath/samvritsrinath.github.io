import PropTypes from 'prop-types';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Timeline from '../components/Timeline';
import Clubs from '../components/Clubs';

const AboutContainer = styled.div`
  padding: 2rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 2rem auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Section = styled(motion.section)`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({theme}) => theme.accent};
  margin-bottom: 2rem;
  margin-top: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({theme}) => theme.accent};
  display: inline-block;
`;

const EducationInfo = styled.div`
  background: ${({theme}) => theme.cardBg};
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
  color: ${({theme}) => theme.subtext};
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
  background: ${({theme}) => theme.body};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const About = ({content, showEducationOnly, showClubsOnly}) => {
  const {education, workExperience, clubs} = content;

  const sectionVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
  };

  if (showEducationOnly) {
    return (
      <AboutContainer>
        <Section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}>
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
      </AboutContainer>
    );
  }

  if (showClubsOnly) {
    return (
      <AboutContainer>
        <Section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}>
          <SectionTitle>Clubs</SectionTitle>
          <Clubs clubs={clubs} />
        </Section>
      </AboutContainer>
    );
  }

  return (
    <AboutContainer>
      <Section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}>
        <SectionTitle>Experience</SectionTitle>
        <Timeline experience={workExperience} />
      </Section>
    </AboutContainer>
  );
};

About.propTypes = {
  content: PropTypes.shape({
    education: PropTypes.shape({
      university: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      courses: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    workExperience: PropTypes.array.isRequired,
    research: PropTypes.array.isRequired,
    clubs: PropTypes.array.isRequired,
  }).isRequired,
  showEducationOnly: PropTypes.bool,
  showClubsOnly: PropTypes.bool,
};

export default About;
