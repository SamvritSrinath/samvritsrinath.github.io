import React from 'react';
import styled from 'styled-components';

const ResearchContainer = styled.section`
  padding: 4rem 0;
  background-color: var(--dark-mode-bg);
  color: var(--dark-mode-text);
  font-family: var(--font-family-base);
`;

const ResearchContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-family: var(--font-family-headings);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ResearchItem = styled.div`
  margin-bottom: 2rem;
`;

const ResearchTitle = styled.h3`
  font-size: 1.2rem;
  font-family: var(--font-family-headings);
  margin-bottom: 0.5rem;
  color: var(--accent-color);
`;

const ResearchDetails = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const Research = () => {
  return (
    <ResearchContainer id="research">
      <ResearchContent>
        <Heading>Research</Heading>
        <ResearchItem>
          <ResearchTitle>
            Country in the Middle: Measuring Paths Between People and their
            Governments
          </ResearchTitle>
          <ResearchDetails>
            Designed a Python-based analytical framework to identify
            vulnerabilities and data exfiltration paths in government networks.
            Constructed an efficient data pipeline utilizing the RIPE Atlas API
            to process over 18K network traces, ensuring precise path analysis.
            Webscraped external databases to integrate AS Numbers and IP
            Addresses, uncovering network anomalies and potential operational
            risks. Authored comprehensive design specifications and integration
            test plans, ensuring reproducibility and clarity in data analysis
            workflows. [cite: 4]
          </ResearchDetails>
        </ResearchItem>
        {/* Add more research items */}
      </ResearchContent>
    </ResearchContainer>
  );
};

export default Research;
