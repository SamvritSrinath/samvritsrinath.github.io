import PropTypes from 'prop-types';
import styled from 'styled-components';
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
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${({theme}) => theme.accent};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Teaching = ({teaching}) => {
  // Transform teaching data to match work experience format
  const transformedTeaching = teaching.map(item => ({
    company: item.company,
    logo: item.logo,
    roles: item.roles,
    technologies: item.technologies || [],
  }));

  return (
    <TeachingContainer>
      <SectionTitle>Teaching Experience</SectionTitle>
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
