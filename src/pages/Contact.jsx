import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.subtext};
  margin-bottom: 3rem;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const InfoItem = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  justify-content: center;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.subtext};
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: scale(1.1);
  }
`;

const Contact = ({ content }) => {
  const { email, linkedin, github } = content;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ContactContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>Get In Touch</SectionTitle>
        <Subtitle>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </Subtitle>
      </motion.div>
      <ContactInfo variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <InfoItem href={`mailto:${email}`}>
            <FaEnvelope /> {email}
          </InfoItem>
        </motion.div>
      </ContactInfo>
      <SocialLinks variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <SocialIcon href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
        </motion.div>
        <motion.div variants={itemVariants}>
          <SocialIcon href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
        </motion.div>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact;
