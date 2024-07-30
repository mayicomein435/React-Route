import React from 'react';
import { Link } from 'react-router-dom';

const FullStackDevelopment = () => {
  return (
    <div>
      <h1>Full Stack Development</h1>
      <p>Learn about Full Stack Development here.</p>
      <p>Check out our <Link to="/datascience">Data Science courses</Link> as well!</p>
      <p>Visit our <a href="https://www.guvi.in/blog/category/full-stack-development/" target="_blank" rel="noopener noreferrer"> FullStackDevelopment</a> for more resources.</p>
    </div>
  );
};

export default FullStackDevelopment;
