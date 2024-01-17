// src/components/Post2.js
import React from 'react';
import '../styles/styles.css';

const Post2 = () => {
  return (
    <div className="Post__2">
      <div className="slider-container" id="sliderContainer">
        <button className="slider-button" id="prevButton">Prev</button>
        <button className="slider-button" id="nextButton">Next</button>
      </div>
      <div className="data">Dec 3</div>
      <div className="flags">I Do Observe</div>
      <div className="title">Preserving nature: a collective responsibility.</div>
      <div className="rectangle"></div>
      <div className="text__gray">In the words of Mahatma Gandhi, "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another.". </div>
      <div className="text two">
        <p>These profound words underline the inextricable link between human actions and the well-being of our planet. As stewards of the Earth, it is our collective responsibility to recognize the importance of preserving nature and to actively contribute to its conservation.</p>
        <p>Our planet is a delicate web of interconnected ecosystems, each playing a vital role in maintaining a balance that sustains life. From the lush rainforests to the expansive oceans, every component of nature contributes to the well-being of the whole. Disturbing one element can set off a chain reaction with far-reaching consequences.</p>
      </div>
      <div className="description">
        <div className="button post2">Read more</div>
        <div className="tags second">
          <a className="tags__link" href="#">#World</a>
          <a className="tags__link" href="#">#Earth</a>
          <a className="tags__link" href="#">#Planet</a>
        </div>
      </div>
    </div>
  );
};

export default Post2;
