import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2rem 0;

  &::after {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${({ theme }) => theme.accent};
    border-radius: 2px;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  margin-bottom: 2rem;
  position: relative;
  padding-left: 50px;
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-50%);
  width: 34px;
  height: 34px;
  background: ${({ theme }) => theme.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border: 4px solid ${({ theme }) => theme.body};
`;

const TechIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const TimelineContent = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Role = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
`;

const Company = styled.p`
  margin: 0 0 0.5rem 0;
  font-style: italic;
  color: ${({ theme }) => theme.subtext};
`;

const Duration = styled.p`
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
`;

const DescriptionList = styled.ul`
  padding-left: 1.2rem;
  margin: 0 0 1rem 0;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.body};
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
`;

const Timeline = ({ experience }) => {
  const getIconForTech = (tech) => {
    const mapping = {
      'Go': 'go/go-original',
      'Python': 'python/python-original',
      'C++': 'cplusplus/cplusplus-original',
      'Docker': 'docker/docker-original',
      'Google Cloud (GCP)': 'googlecloud/googlecloud-original',
      'BigQuery': 'googlecloud/googlecloud-original',
      'SQL': 'mysql/mysql-original',
      'GDB': 'gdb/gdb-plain',
      'Valgrind': 'devicon/devicon-plain', // Fallback
      'Bash': 'bash/bash-original',
      'gRPC': 'grpc/grpc-plain',
      'Java': 'java/java-original',
      'JSP': 'java/java-original',
      'Playwright': 'playwright/playwright-original',
      'Postman': 'postman/postman-original',
    };
    return mapping[tech] || 'devicon/devicon-plain'; // Default icon
  };

  return (
    <TimelineContainer>
      {experience.map((job, index) => (
        <TimelineItem
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 * index }}
        >
          <TimelineIcon>
            <TechIcon src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${getIconForTech(job.technologies[0])}.svg`} />
          </TimelineIcon>
          <TimelineContent>
            <Role>{job.role}</Role>
            <Company>{job.company}</Company>
            <Duration>{job.duration}</Duration>
            <DescriptionList>
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </DescriptionList>
            <TechList>
              {job.technologies.map((tech, i) => (
                <TechItem key={i}>
                  <TechIcon src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${getIconForTech(tech)}.svg`} />
                  <span>{tech}</span>
                </TechItem>
              ))}
            </TechList>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

Timeline.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Timeline;