import PropTypes from 'prop-types';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const ClubsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ClubCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    border-color: ${({theme}) => theme.accent};
  }
`;

const ClubLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  object-fit: contain;
`;

const ClubName = styled.h3`
  font-size: 1.2rem;
  color: ${({theme}) => theme.accent};
  margin-bottom: 0.5rem;
`;

const ClubRole = styled.p`
  font-size: 1rem;
  color: ${({theme}) => theme.subtext};
`;

const ClubLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const Clubs = ({clubs}) => {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
  };

  return (
    <ClubsContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      {clubs.map((club, index) => (
        <ClubCard key={index} variants={itemVariants}>
          <ClubLink
            href={club.website}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit ${club.name} website`}>
            {club.logo && (
              <ClubLogo src={club.logo} alt={`${club.name} logo`} />
            )}
            <ClubName>{club.name}</ClubName>
            <ClubRole>{club.role}</ClubRole>
          </ClubLink>
        </ClubCard>
      ))}
    </ClubsContainer>
  );
};

Clubs.propTypes = {
  clubs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      logo: PropTypes.string,
      website: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Clubs;
