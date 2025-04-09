import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  padding: 4rem 0;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: var(--font-family-base);
`;

const ExperienceContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-family: var(--font-family-headings);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ExperienceItem = styled.li`
  margin-bottom: 2rem;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.2rem;
  font-family: var(--font-family-headings);
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const ExperienceDates = styled.p`
  font-size: 0.9rem;
  color: var(--secondary-color);
  margin-bottom: 0.25rem;
`;

const ExperienceDescription = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

const ExperienceDescriptionItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
`;

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceContent>
        <Heading>Experience</Heading>
        <ExperienceList>
          <ExperienceItem>
            <ExperienceTitle>
              Returning Software Engineering Intern | Arista Networks
            </ExperienceTitle>
            <ExperienceDates>March 2025 - June 2025</ExperienceDates>
            <ExperienceDescription>
              <ExperienceDescriptionItem>
                Developing a scalable research application in Python and Go to
                determine ownership of 238M IPv4 Addresses [cite: 3]
              </ExperienceDescriptionItem>
              <ExperienceDescriptionItem>
                Leveraging Google BigQuery and GCP to amass and process 1.9TB of
                multi-protocol data (DNS, WHOIS, HTTP, TLS) with SQL queries
                [cite: 3]
              </ExperienceDescriptionItem>
              {/* Add more responsibilities */}
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem>
            <ExperienceTitle>
              Network Security Researcher | Center for Networked Systems
            </ExperienceTitle>
            <ExperienceDates>
              June 2023 - Present, August 2024 - Present
            </ExperienceDates>
            <ExperienceDescription>
              <ExperienceDescriptionItem>
                Designed a Python-based analytical framework to identify
                vulnerabilities and data exfiltration paths in government
                networks [cite: 4]
              </ExperienceDescriptionItem>
              <ExperienceDescriptionItem>
                Constructed an efficient data pipeline utilizing the RIPE Atlas
                API to process over 18K network traces, ensuring precise path
                analysis [cite: 4]
              </ExperienceDescriptionItem>
              {/* Add more responsibilities */}
            </ExperienceDescription>
          </ExperienceItem>
          {/* Add more experience items */}
        </ExperienceList>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default Experience;
