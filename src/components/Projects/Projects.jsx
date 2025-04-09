import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectsContainer = styled.section`
  padding: 4rem 0;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: var(--font-family-base);
`;

const ProjectsContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Heading = styled.h2`
  font-size: 2rem;
  font-family: var(--font-family-headings);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Projects = () => {
  const projects = [
    {
      title: 'Developer Journal Web App',
      image: '/path/to/project1.jpg', // Placeholder
      description:
        'Led team of 10 Students to Develop an All-in-One Task Hub, Journal, and File Storage System catered for Developers. Used Electron to create a Progressive Web App that was local first, stored all entries using a SQL Database and File System. Created a comprehenesive CI/CD Pipeline developed in Github Actions using Playwright & Prettier for Testing and Deployment.',
      technologies: ['HTML', 'CSS', 'JS', 'Electron', 'Playwright', 'SQLite3'],
      liveDemo: '#', // Placeholder
      sourceCode: '#', // Placeholder
    },
    {
      title: 'Inventory Processing System',
      image: '/path/to/project2.jpg', // Placeholder
      description:
        'Developed a Full-Stack Application for 501(c)(3) Non-Profit to manage Furniture Requests and Inventory for Veterans. Implemented a Firebase Backend to handle Authentication, Tiered Roles, and Storage of Site Context and User Management. Developed a responsive frontend using React and Next.js, interfacing with MongoDB for item availability and modularity. Created a Firebase Middleware to distinguish between Admins, Volunteers, and Veterans for CRUD Operations.',
      technologies: ['React', 'Next.js', 'Typescript', 'Firebase', 'MongoDB'],
      liveDemo: '#', // Placeholder
      sourceCode: '#', // Placeholder
    },
    {
      title: 'Political Sentiment Text Classifier',
      image: '/path/to/project3.jpg', // Placeholder
      description:
        'Deployed BERT Transformers to predict and analyze political sentiment from documents with an accuracy of 85%. Implemented Data Processing and Visualizations of loss, validation accuracy and of Confusion Matrices using Numpy. Parsed and Wrangled 13K Reddit Thread entries and filtered charged political texts, used k-fold Cross Validation to mitigate overfitting.',
      technologies: ['PyTorch', 'Numpy', 'Tensorflow', 'Matplotlib'],
      liveDemo: '#', // Placeholder
      sourceCode: '#', // Placeholder
    },
    // Add more projects
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <Heading>Projects</Heading>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;
