// src/components/Post3.js
import React from 'react';
import sculptureImage from '../images/Rectangle2.svg';
import '../styles/styles.css';

const Post3 = () => {
  return (
    <div className="Post__3">
      <div className="data">Dec 2</div>
      <div className="flags">I Do reflect</div>
      <div className="title">Safeguarding nature: practical steps for conservation.</div>
      <div className="rectangle"></div>
      <div className="photo__text">
        <img className="photo__2" src={sculptureImage} alt="skulpture" />
        <div className="text there">
          <p>
            One of the simplest and most effective ways to minimize our impact on the environment is to adopt the mantra of "reduce, reuse, recycle." By consciously reducing our consumption, reusing items wherever possible, and recycling materials, we can significantly decrease the amount of waste that ends up in landfills.
          </p>
          <p>
            Conserving energy is pivotal in mitigating the adverse effects of climate change. Simple practices such as turning off lights when not in use, using energy-efficient appliances, and embracing renewable energy sources contribute to the reduction of carbon footprints and the overall sustainability of our energy consumption. Water is a finite resource, and its conservation is essential for the health of ecosystems and communities alike. Implement water-saving practices such as fixing leaks, using water-efficient appliances, and being mindful of water consumption in daily activities.
            The agricultural industry plays a significant role in shaping the environment. Supporting sustainable agricultural practices, such as organic farming and responsible land management, helps preserve biodiversity, maintain soil health, and reduce the use of harmful pesticides.
          </p>
        </div>
      </div>
      <div className="text__gray inthree">Become an advocate for the environment by supporting and promoting policies that prioritize conservation efforts.</div>
      <div className="text end">Education is a powerful tool in fostering environmental stewardship. Share knowledge about the importance of nature conservation, biodiversity, and sustainable living practices. By raising awareness, we can inspire others to make informed choices that positively impact the environment. </div>
      <div className="description">
        <div className="button">Read more</div>
        <div className="tags">
          <a className="tags__link" href="#">#Education </a>
          <a className="tags__link" href="#">#Safeguarding</a>
        </div>
      </div>
    </div>
  );
};

export default Post3;
