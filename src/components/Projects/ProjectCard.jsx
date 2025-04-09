import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const Title = styled.h4`
  font-size: 1.1rem;
  font-family: var(--font-family-headings);
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 0.75rem;
`;

const Technologies = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Technology = styled.li`
  font-size: 0.8rem;
  background-color: var(--accent-color);
  color: var(--dark-mode-bg);
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkButton = styled.a`
  text-decoration: none;
  color: var(--primary-color);
  font-size: 0.9rem;

  &:hover {
    color: var(--accent-color);
  }
`;

const ProjectCard = ({project}) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <CardContent>
        <Title> {project.title}</Title>
        <Description>{project.description}</Description>
        <Technologies>
          {project.technologies.map((tech, index) => (
            <Technology key={index}>{tech}</Technology>
          ))}
        </Technologies>
        <Links>
          <LinkButton href={project.liveDemo} target="_blank">
            Live Demo
          </LinkButton>
          <LinkButton href={project.sourceCode} target="_blank">
            Source Code
          </LinkButton>
        </Links>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
