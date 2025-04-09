import React from 'react';
import './About.css'; // Create this CSS file

const About = () => {
  // Extract details from resume content [cite: 1, 2, 3, 5, 6, 8, 15]
  const education = {
    degree: 'B.S./M.S. Computer Science',
    university: 'University of California, San Diego',
    duration: 'September 2022 - June 2026 (Expected)',
    details: [
      'Regents Scholar (Top 1% of incoming freshman)',
      'GPA: 3.97/4.00',
    ],
    courses:
      'Advanced Data Structures, Algorithms, Graduate Intro to Machine Learning, Recommender Systems, Computer Architecture, Parallel Computing, Wireless Networks, Internet Measurement, AI: Search & Optimization, Databases, Software Engineering, Scalable Analytics',
  };

  const skills = {
    languages: [
      'Python',
      'C++',
      'Java',
      'Javascript',
      'HTML/CSS',
      'SQL',
      'C',
      'Go',
      'ARM64',
      'Typescript',
    ],
    technologies: [
      'Pandas',
      'PyTorch',
      'Tensorflow',
      'Numpy',
      'React',
      'MongoDB',
      'Node',
      'Vite',
      'Firebase',
      'Stripe',
      'PDB',
      'Postman',
      'Unix/Bash',
    ],
    librariesTools: [
      'Dask',
      'Spark',
      'Hadoop',
      'TorchVision',
      'OpenCV',
      'Matplotlib',
      'Redux/Sagas',
      'Sklearn',
    ],
    cloud: ['AWS EC2', 'AWS S3'],
  };

  // You can write a brief bio here or dynamically pull experience highlights
  const bio = `
    I am a driven Computer Science student at UC San Diego, pursuing a combined B.S./M.S. degree[cite: 2].
    My academic journey as a Regents Scholar is complemented by hands-on experience in software engineering and network security research[cite: 1, 3].
    I have contributed to projects ranging from developing diagnostic software for high-speed switches at Arista Networks [cite: 6] to building full-stack applications for non-profits [cite: 11] and university services[cite: 8].
    My research involves analyzing large-scale network data and developing applications to understand internet infrastructure[cite: 3].
    I'm passionate about tackling complex problems and continuously learning new technologies[cite: 15].
  `;

  return (
    <div className="page-container about-page">
      <h2>About Me</h2>

      <section className="about-section bio-section">
        <h3>Bio</h3>
        {/* Use dangerouslySetInnerHTML ONLY if the source is trusted and doesn't contain user input. Better to parse/format */}
        {bio
          .split('\n')
          .map(
            (paragraph, index) =>
              paragraph.trim() && <p key={index}>{paragraph.trim()}</p>,
          )}
      </section>

      <section className="about-section education-section">
        <h3>Education</h3>
        <h4>{education.degree}</h4>
        <p>
          <strong>{education.university}</strong> ({education.duration})
        </p>
        <ul>
          {education.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <p>
          <strong>Relevant Coursework:</strong> {education.courses}
        </p>
      </section>

      <section className="about-section skills-section">
        <h3>Skills</h3>
        <div className="skills-category">
          <h4>Languages</h4>
          <div className="skills-list">
            {skills.languages.map(skill => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h4>Technologies & Frameworks</h4>
          <div className="skills-list">
            {skills.technologies.map(skill => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h4>Libraries & Tools</h4>
          <div className="skills-list">
            {skills.librariesTools.map(skill => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h4>Cloud Services</h4>
          <div className="skills-list">
            {skills.cloud.map(skill => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Optional: Add Experience Section */}
      {/* <section className="about-section experience-section">...</section> */}
    </div>
  );
};

// Add About.css or styles in App.css/index.css
// Example About.css
/*
.about-page { max-width: 900px; margin: 2rem auto; padding: 0 1rem; }
.about-section { margin-bottom: 2rem; background-color: var(--card-bg); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); }
.about-section h3 { border-bottom: 2px solid var(--primary-color); padding-bottom: 0.5rem; margin-bottom: 1rem; }
.bio-section p { line-height: 1.6; margin-bottom: 1rem; }
.education-section ul { list-style: disc; margin-left: 20px; }
.skills-category { margin-bottom: 1rem; }
.skills-category h4 { margin-bottom: 0.5rem; }
.skills-list .skill-tag { display: inline-block; background-color: var(--tag-bg); color: var(--tag-text); padding: 0.4rem 0.8rem; margin: 0.2rem; border-radius: 4px; font-size: 0.9rem; }
*/

export default About;
