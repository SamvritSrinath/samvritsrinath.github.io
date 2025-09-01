import PropTypes from 'prop-types';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {techIconMap} from '../utils/techIcons.jsx';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 2rem 0;
`;

const CompanySection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({theme}) => theme.accent};
`;

const CompanyLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid ${({theme}) => theme.accent};
  background: rgba(255, 255, 255, 0.1);
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  color: ${({theme}) => theme.text};
`;

const RolesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RoleCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid ${({theme}) => theme.accent};
  margin-left: 1rem;
`;

const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const RoleTitle = styled.h4`
  margin: 0;
  font-size: 1.3rem;
  color: ${({theme}) => theme.accent};
  font-weight: 600;
`;

const RoleDuration = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({theme}) => theme.subtext};
  background: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  white-space: nowrap;
`;

const DescriptionList = styled.ul`
  padding-left: 1.2rem;
  margin: 0 0 1.5rem 0;
  color: ${({theme}) => theme.subtext};
  line-height: 1.6;
`;

const DescriptionItem = styled.li`
  margin-bottom: 0.5rem;
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
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid ${({theme}) => theme.accent};
  backdrop-filter: blur(5px);
`;

const Timeline = ({experience}) => {
  return (
    <TimelineContainer>
      {experience.map((exp, index) => (
        <CompanySection
          key={index}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.1 * index}}>
          <CompanyHeader>
            <CompanyLogo src={exp.logo} alt={`${exp.company} logo`} />
            <CompanyInfo>
              <CompanyName>{exp.company}</CompanyName>
            </CompanyInfo>
          </CompanyHeader>
          
          <RolesContainer>
            {exp.roles.map((role, i) => (
              <RoleCard key={i}>
                <RoleHeader>
                  <RoleTitle>{role.role}</RoleTitle>
                  <RoleDuration>{role.duration}</RoleDuration>
                </RoleHeader>
                
                {role.description && role.description.length > 0 && (
                  <DescriptionList>
                    {role.description.map((item, j) => (
                      <DescriptionItem key={j}>{item}</DescriptionItem>
                    ))}
                  </DescriptionList>
                )}
                
                <TechList>
                  {role.technologies ? role.technologies.map((tech, j) => (
                    <TechItem key={j}>
                      {techIconMap[tech] || <span></span>}
                      <span>{tech}</span>
                    </TechItem>
                  )) : exp.technologies.map((tech, j) => (
                    <TechItem key={j}>
                      {techIconMap[tech] || <span></span>}
                      <span>{tech}</span>
                    </TechItem>
                  ))}
                </TechList>
              </RoleCard>
            ))}
          </RolesContainer>
        </CompanySection>
      ))}
    </TimelineContainer>
  );
};

Timeline.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      logo: PropTypes.string,
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          role: PropTypes.string.isRequired,
          duration: PropTypes.string.isRequired,
          description: PropTypes.arrayOf(PropTypes.string),
          technologies: PropTypes.arrayOf(PropTypes.string),
        }),
      ).isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default Timeline;
