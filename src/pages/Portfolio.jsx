import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Portfolio.css'; // Create this CSS file

const Portfolio = () => {
  // Extract projects from resume content [cite: 8, 9, 10, 11, 12, 13, 14, 15]
  const projects = [
    {
      title: 'Developer Journal Web App',
      description:
        'Led a team of 10 students to develop an all-in-one task hub, journal, and file storage system for developers. Created a local-first PWA using Electron, storing data via SQLite and the file system. Implemented a CI/CD pipeline with GitHub Actions, Playwright, and Prettier.',
      techStack: [
        'HTML',
        'CSS',
        'JS',
        'Electron',
        'Playwright',
        'SQLite3',
        'GitHub Actions',
      ],
      // link: "Optional live demo link",
      repo: 'Optional GitHub repo link', // Add link if available
    },
    {
      title: 'Inventory Processing System',
      description:
        'Developed a full-stack application for a 501(c)(3) non-profit to manage furniture requests and inventory for veterans. Implemented a Firebase backend for authentication, tiered roles (Admin, Volunteer, Veteran), and context storage. Built a responsive frontend with React and Next.js, interfacing with MongoDB.',
      techStack: [
        'React',
        'Next.js',
        'TypeScript',
        'Firebase',
        'MongoDB',
        'Node.js',
      ], // Assuming Node for backend/middleware
      // link: "Optional live demo link",
      repo: 'Optional GitHub repo link', // Add link if available
    },
    {
      title: 'Political Sentiment Text Classifier',
      description:
        'Deployed BERT Transformers to predict and analyze political sentiment from documents, achieving 85% accuracy. Implemented data processing, visualizations (loss, accuracy, confusion matrices) using Numpy and Matplotlib. Parsed and wrangled 13K Reddit thread entries, using k-fold cross-validation.',
      techStack: [
        'Python',
        'PyTorch',
        'Numpy',
        'Tensorflow',
        'Matplotlib',
        'Scikit-learn',
      ], // Added Python & Sklearn based on context
      // link: "Optional live demo link",
      repo: 'Optional GitHub repo link', // Add link if available
    },
    {
      title: 'Asset Ownership Platform',
      description:
        'Developing a scalable research application in Python and Go to determine ownership of 238M IPv4 Addresses. Leveraging Google BigQuery and GCP to process 1.9TB of data. Integrating a custom GPT model to enhance efficiency. Using regex for data extraction from DNS/TLS records.',
      techStack: [
        'Python',
        'Go',
        'SQL',
        'Google BigQuery',
        'GCP',
        'GPT',
        'Regex',
      ],
      // link: "Link to paper or project page if public",
      repo: 'Optional GitHub repo link',
    },
    {
      title: 'Country in the Middle Analysis',
      description:
        'Designed a Python analytical framework to identify government network vulnerabilities using RIPE Atlas API data (18K+ traces). Webscraped external databases for AS/IP info. Authored design specs and test plans.',
      techStack: ['Python', 'RIPE Atlas API', 'Web Scraping', 'Data Analysis'],
      link: "PAM '25 Publication (if available)", // Add link if available
      repo: 'Optional GitHub repo link',
    },
    // Add other projects if desired
  ];

  return (
    <div className="page-container portfolio-page">
      <h2>My Projects</h2>
      <p>
        Here are some of the key projects I've worked on. More details can be
        found on my GitHub or in my resume.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
};

// Add Portfolio.css
// Example Portfolio.css
/*
.portfolio-page { max-width: 1100px; margin: 2rem auto; padding: 0 1rem; }
.portfolio-page h2 { text-align: center; margin-bottom: 1rem; }
.portfolio-page > p { text-align: center; margin-bottom: 2rem; color: var(--text-secondary); }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; } // Responsive grid
*/

export default Portfolio;
