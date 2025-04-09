import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 4rem 0;
  background-color: var(--dark-mode-bg);
  color: var(--dark-mode-text);
  font-family: var(--font-family-base);
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-family: var(--font-family-headings);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactLink = styled.a`
  font-size: 1.1rem;
  color: var(--accent-color);
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: var(--primary-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: var(--dark-mode-text);
  margin: 0 1rem;

  &:hover {
    color: var(--accent-color);
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <Heading>Contact</Heading>
        <ContactDetails>
          <ContactLink href="mailto:sasrinath@ucsd.edu">
            Email: sasrinath@ucsd.edu
          </ContactLink>
          <ContactLink href="tel:628-232-1824">Phone: 628-232-1824</ContactLink>
          <SocialLinks>
            <SocialLink
              href="https://www.linkedin.com/in/samvrit-srinath/"
              target="_blank">
              {/* LinkedIn Icon (You can use an SVG or icon library) */}
              LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/SamvritSrinath"
              target="_blank">
              {/* GitHub Icon (You can use an SVG or icon library) */}
              GitHub
            </SocialLink>
          </SocialLinks>
        </ContactDetails>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
