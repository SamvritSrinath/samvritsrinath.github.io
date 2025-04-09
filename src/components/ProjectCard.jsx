import React from 'react';
import './ProjectCard.css'; // Create this CSS file

const ProjectCard = ({title, description, techStack, link, repo}) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tech">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

// Add ProjectCard.css
// Example ProjectCard.css
/*
.project-card { background-color: var(--card-bg); border: 1px solid var(--border-color); padding: 1.5rem; margin-bottom: 1rem; border-radius: 8px; }
.project-card h3 { margin-bottom: 0.5rem; color: var(--primary-color); }
.project-tech { margin: 1rem 0; }
.tech-tag { display: inline-block; background-color: var(--tag-bg); color: var(--tag-text); padding: 0.3rem 0.6rem; border-radius: 4px; margin-right: 0.5rem; font-size: 0.85rem; }
.project-links a { margin-right: 1rem; color: var(--link-color); text-decoration: none; }
.project-links a:hover { text-decoration: underline; }
*/

export default ProjectCard;
