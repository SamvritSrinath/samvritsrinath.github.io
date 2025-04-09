import React from 'react';
import {Link} from 'react-router-dom';
// Make sure Hero.css is imported if you haven't already
// import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Profile Picture (relies on Hero.css for styling) */}
      <img
        src="/placeholder-profile.png" // Make sure this image exists in public/
        alt="Samvrit Srinath"
        className="hero-profile-pic" // CSS class handles circular border, size etc.
      />
      <div className="hero-content">
        <h1>Hi, I'm Samvrit Srinath</h1>
        <p className="hero-subtitle">
          Computer Science Student | Software Engineer | Researcher
        </p>
        <p>
          Passionate about building scalable systems, exploring network
          security, and leveraging data for impactful solutions.
        </p>
        <div className="hero-cta">
          {/* Use base button classes */}
          <Link
            to="/portfolio"
            className="button-base button-primary cta-button">
            View My Work
          </Link>
          <a
            href="/Samvrit_Srinath_Resume.pdf"
            download
            className="button-base button-secondary cta-button">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
