import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import './Footer.css'; // Create this CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Extract from resume [cite: 1]
  const githubUrl = 'https://github.com/SamvritSrinath';
  const linkedinUrl = 'https://www.linkedin.com/in/samvrit-srinath/';

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          {/* Add other social links if needed */}
        </div>
        <p>&copy; {currentYear} Samvrit Srinath. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Add Footer.css
// Example Footer.css
/*
.footer { background-color: var(--footer-bg); color: var(--footer-text); padding: 1.5rem 2rem; text-align: center; margin-top: auto; } // margin-top: auto pushes footer down
.footer-socials a { color: inherit; font-size: 1.5rem; margin: 0 0.5rem; }
.footer-socials a:hover { color: var(--primary-color); }
.footer-content p { margin-top: 0.5rem; font-size: 0.9rem; }
*/

export default Footer;
