import styled from 'styled-components';
import {motion} from 'framer-motion';

const SkillsContainer = styled.div`
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({theme}) => theme.accent};
  margin-bottom: 3rem;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${SkillCard}:hover & {
    transform: scale(1.1);
  }
`;

const SkillName = styled.p`
  font-weight: 500;
  color: ${({theme}) => theme.subtext};
  transition: color 0.3s ease;
  text-align: center;

  ${SkillCard}:hover & {
    color: ${({theme}) => theme.text};
  }
`;

const Skills = () => {
  const skillVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
  };

  const skillData = [
    {name: 'Python', icon: 'python/python-original'},
    {name: 'C++', icon: 'cplusplus/cplusplus-original'},
    {name: 'Java', icon: 'java/java-original'},
    {name: 'JavaScript', icon: 'javascript/javascript-original'},
    {name: 'Go', icon: 'go/go-original'},
    {name: 'TypeScript', icon: 'typescript/typescript-original'},
    {name: 'React', icon: 'react/react-original'},
    {name: 'Node.js', icon: 'nodejs/nodejs-original'},
    {name: 'MongoDB', icon: 'mongodb/mongodb-original'},
    {name: 'Firebase', icon: 'firebase/firebase-plain'},
    {
      name: 'AWS',
      icon: 'amazonwebservices/amazonwebservices-original-wordmark',
    },
    {name: 'Git', icon: 'git/git-original'},
    {name: 'Docker', icon: 'docker/docker-original'},
    {name: 'Kubernetes', icon: 'kubernetes/kubernetes-plain'},
    {name: 'HTML5', icon: 'html5/html5-original'},
    {name: 'CSS3', icon: 'css3/css3-original'},
  ];

  return (
    <SkillsContainer>
      <SectionTitle>Technologies I Work With</SectionTitle>
      <SkillsGrid>
        {skillData.map((skill, index) => (
          <SkillCard
            key={index}
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay: index * 0.1}}>
            <SkillIcon
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${skill.icon}.svg`}
              alt={`${skill.name} logo`}
            />
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
