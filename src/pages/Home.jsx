import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.png';

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  min-height: 80vh;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
`;

const ProfileImage = styled(motion.img)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 4px solid ${({ theme }) => theme.accent};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.accent};
  margin: 0.5rem 0 1.5rem;
  font-family: 'Roboto Mono', monospace;
`;

const Bio = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  color: ${({ theme }) => theme.subtext};
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Home = ({ content }) => {
  const { name, title, bio } = content;

  return (
    <HeroContainer>
      <ContentWrapper>
        <ProfileImage
          src={profilePic}
          alt="Samvrit Srinath"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <Name
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {name}
        </Name>
        <Title
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {title}
        </Title>
        <Bio
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {bio}
        </Bio>
        <CTAButton
          href="/Samvrit_Srinath_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Download Resume
        </CTAButton>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Home;
