import PropTypes from 'prop-types';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Typewriter} from 'react-simple-typewriter';

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  min-height: 100vh;
  gap: 4rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(3px);
  border-radius: 20px;
  margin: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 4rem 1rem;
    gap: 2rem;
    min-height: 80vh;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  flex-shrink: 0;
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${({theme}) => theme.accent};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const TextContent = styled.div`
  max-width: 600px;
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme}) => theme.text};

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({theme}) => theme.accent};
  margin: 0.5rem 0 1.5rem;
  font-family: 'Roboto Mono', monospace;
  height: 40px;
`;

const Bio = styled(motion.p)`
  font-size: 1.1rem;
  margin: 0 0 2rem;
  color: ${({theme}) => theme.subtext};
`;

const Summary = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SummaryItem = styled.div`
  text-align: center;
`;

const SummaryValue = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme}) => theme.text};
`;

const SummaryLabel = styled.p`
  margin: 0;
  color: ${({theme}) => theme.subtext};
`;

const Home = ({content}) => {
  const {name, bio} = content;

  return (
    <HeroContainer>
      <ProfileImageContainer
        initial={{scale: 0, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <ProfileImage src="/assets/profile/profile.png" alt="Samvrit Srinath" />
      </ProfileImageContainer>
      <TextContent>
        <Name
          initial={{y: -20, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.2}}>
          {name}
        </Name>
        <Title
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.4}}>
          <Typewriter
            words={['Software Engineer', 'Student', 'Researcher', 'Instructor', 'Leader', 'Problem Solver']}
            loop={1}
            typeSpeed={70}
            deleteSpeed={50}
          />
          <span>&nbsp;</span>
        </Title>
        <Bio
          initial={{y: 20, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.6}}>
          {bio}
        </Bio>
        <Summary
          initial={{y: 20, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.8}}>
          <SummaryItem>
            <SummaryValue>3</SummaryValue>
            <SummaryLabel>Internships</SummaryLabel>
          </SummaryItem>
          <SummaryItem>
            <SummaryValue>5+</SummaryValue>
            <SummaryLabel>Projects Completed</SummaryLabel>
          </SummaryItem>
        </Summary>
      </TextContent>
    </HeroContainer>
  );
};

Home.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;
