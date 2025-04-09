import React from 'react';
import {FaEnvelope, FaPhone, FaLinkedin, FaGithub} from 'react-icons/fa';
import './Contact.css'; // Create this CSS file

const Contact = () => {
  // Extract from resume [cite: 1]
  const contactInfo = {
    email: 'sasrinath@ucsd.edu',
    phone: '628-232-1824',
    linkedin: 'https://www.linkedin.com/in/samvrit-srinath/',
    github: 'https://github.com/SamvritSrinath',
  };

  return (
    <div className="page-container contact-page">
      <h2>Get In Touch</h2>
      <p>
        I'm always open to discussing new opportunities, research
        collaborations, or just connecting with fellow tech enthusiasts. Feel
        free to reach out!
      </p>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </div>
        {/* Consider omitting phone for privacy on a public site, or make it optional */}
        {/* <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>{contactInfo.phone}</span>
        </div> */}
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>

      {/* Optional: Add a contact form here later if desired */}
      {/* <form className="contact-form"> ... </form> */}
    </div>
  );
};

// Add Contact.css
// Example Contact.css
/*
.contact-page { max-width: 800px; margin: 2rem auto; padding: 0 1rem; text-align: center; }
.contact-page h2 { margin-bottom: 1rem; }
.contact-page > p { margin-bottom: 2rem; color: var(--text-secondary); }
.contact-details { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
.contact-item { display: flex; align-items: center; gap: 0.8rem; font-size: 1.1rem; }
.contact-icon { color: var(--primary-color); font-size: 1.3rem; }
.contact-item a { color: var(--link-color); text-decoration: none; }
.contact-item a:hover { text-decoration: underline; }
*/

export default Contact;
