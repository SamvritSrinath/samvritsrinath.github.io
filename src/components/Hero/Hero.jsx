import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import ProfileImage from '/placeholder-profile.png'; // Import your profile image

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: var(--font-family-base);
`;

const HeroContent = styled.div`
  text-align: left;
  max-width: 600px;
`;

const ProfilePicture = styled.div`
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${ProfileImage});
  background-size: cover;
  background-position: center;
`;

const TypewriterAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Introduction = styled.h1`
  font-size: 2.5rem;
  font-family: var(--font-family-headings);
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.15em solid var(--accent-color);
  animation: ${TypewriterAnimation} 3.5s steps(40, end) forwards;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: var(--secondary-color);
`;

const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  font-family: var(--font-family-headings);

  &:hover {
    background-color: var(--accent-color);
    color: var(--dark-mode-bg);
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroContent>
        <Introduction>Samvrit Srinath</Introduction>
        <Tagline>
          {/* Replace with your actual tagline */}
          Passionate Software Engineer | AI Enthusiast | Problem Solver
        </Tagline>
        <Button>View Projects</Button>
        <Button>Contact Me</Button>
      </HeroContent>
      <ProfilePicture />
    </HeroContainer>
  );
};

export default Hero;
