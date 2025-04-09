import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* You can add more sections here later, like featured projects or skills overview */}
      <section style={{padding: '2rem', textAlign: 'center'}}>
        <h2>Welcome!</h2>
        <p>Explore my work and learn more about my skills and experience.</p>
      </section>
    </div>
  );
};

export default Home;
