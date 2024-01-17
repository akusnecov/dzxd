// src/components/Home.js
import React from 'react';
import Header from './Header'; // исправлено
import Post1 from './Post1'; // исправлено
import Post2 from './Post2'; // исправлено
import Post3 from './Post3'; // исправлено
import Footer from './Footer'; // исправлено
import '../styles/styles.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Post1 />
      <Post2 />
      <Post3 />
      <Footer />
    </div>
  );
};

export default Home;

