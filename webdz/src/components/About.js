// src/components/About.js
import React from 'react';
import Header from './Header'; // исправлено
import AboutSection from './AboutSection'; // исправлено
import Footer from './Footer'; // исправлено
import '../styles/styles.css';

const About = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;

