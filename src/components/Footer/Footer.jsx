import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--dark-mode-bg);
  color: var(--dark-mode-text);
  text-align: center;
  padding: 1rem 0;
  font-family: var(--font-family-base);
`;

const FooterText = styled.p`
  font-size: 0.9rem;
`;

const FooterLink = styled.a`
  color: var(--accent-color);
  text-decoration: none;

  &:hover {
    color: var(--primary-color);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Samvrit Srinath | Built with{' '}
        <FooterLink href="https://reactjs.org/" target="_blank">
          React
        </FooterLink>{' '}
        and{' '}
        <FooterLink href="https://vitejs.dev/" target="_blank">
          Vite
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
