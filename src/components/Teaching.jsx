import {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Timeline from './Timeline';

const TeachingContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({theme}) => theme.accent};
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) scaleX(${({isVisible}) => (isVisible ? 1 : 0)});
    transform-origin: center;
    width: 60px;
    height: 3px;
    background: ${({theme}) => theme.accent};
    border-radius: 2px;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Teaching = ({teaching}) => {
  const [isTitleVisible, setTitleVisible] = useState(false);
  // Transform teaching data to match work experience format
  const transformedTeaching = teaching.map(item => ({
    company: item.company,
    logo: item.logo,
    roles: item.roles,
    technologies: item.technologies || [],
  }));

  return (
    <TeachingContainer>
      <motion.div
        onViewportEnter={() => setTitleVisible(true)}
        viewport={{once: true, amount: 0.3}}>
        <SectionTitle isVisible={isTitleVisible}>
          Teaching Experience
        </SectionTitle>
      </motion.div>
      <Timeline experience={transformedTeaching} />
    </TeachingContainer>
  );
};

Teaching.propTypes = {
  teaching: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          role: PropTypes.string.isRequired,
          duration: PropTypes.string.isRequired,
          description: PropTypes.arrayOf(PropTypes.string).isRequired,
        }),
      ).isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default Teaching;
