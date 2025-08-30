
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.cardBg};
  border-top: 1px solid ${({ theme }) => theme.headerBorder};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.subtext};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.subtext};
  font-size: 0.9rem;
`;

const Footer = () => {
  const { linkedin, github } = resumeData.main.contact;
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialIcon href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
      </SocialLinks>
      <Copyright>&copy; {new Date().getFullYear()} Samvrit Srinath. All Rights Reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
