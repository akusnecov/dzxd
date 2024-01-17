// src/components/Post1.js
import React from 'react';
import '../styles/styles.css';

const Post1 = () => {
  return (
    <div className="Post__1">
      <div className="data">Dec 4</div>
      <div className="flags">I Do travel</div>
      <div className="title">Nature's magic: captivating landscapes that inspire.</div>
      <div className="rectangle"></div>
      <div className="text">Nature is a true artist, painting its masterpieces in the most vibrant hues and unique shades. When we gaze upon landscapes, it opens its enchanting art gallery, filled with majestic mountains, mysterious forests, azure lakes, and lush flower fields. In this article, we will delve into the world of breathtaking landscapes that not only captivate with their beauty but also instill a sense of inspiration.</div>
      <div className="description">
        <div className="button">Read more</div>
        <div className="tags">
          <a className="tags__link" href="#">#Nature</a>
          <a className="tags__link" href="#">#Lakes</a>
          <a className="tags__link" href="#">#Beauty</a>
        </div>
      </div>
    </div>
  );
};

export default Post1;
