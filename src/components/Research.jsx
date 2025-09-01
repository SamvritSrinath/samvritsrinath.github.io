import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResearchContainer = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Institution = styled.h3`
  font-size: 1.8rem;
  margin: 0;
`;

const Role = styled.div`
  margin-top: 1.5rem;
`;

const RoleTitle = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.accent};
`;

const RoleDuration = styled.p`
    font-style: italic;
    color: ${({ theme }) => theme.subtext};
`;

const Research = ({ research }) => {
  return (
    <ResearchContainer>
      {research.map((item, index) => (
        <div key={index}>
          <Institution>{item.institution}</Institution>
          {item.roles.map((role, i) => (
            <Role key={i}>
              <RoleTitle>{role.role}</RoleTitle>
              <RoleDuration>{role.duration}</RoleDuration>
            </Role>
          ))}
        </div>
      ))}
    </ResearchContainer>
  );
};

Research.propTypes = {
    research: PropTypes.arrayOf(
        PropTypes.shape({
            institution: PropTypes.string.isRequired,
            roles: PropTypes.arrayOf(
                PropTypes.shape({
                    role: PropTypes.string.isRequired,
                    duration: PropTypes.string.isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
};

export default Research;
