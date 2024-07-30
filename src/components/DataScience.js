import React from 'react';
import { Link } from 'react-router-dom';

const DataScience = () => {
  return (
    <div>
      <h1>Data Science</h1>
      <p>Explore our Data Science courses.</p>
      <p>Interested in Cyber Security? Check out our <Link to="/cybersecurity">Cyber Security</Link> courses.</p>
      <p>Visit our <a href="https://www.guvi.in/blog/category/data-science/" target="_blank" rel="noopener noreferrer">Data science</a> for more resources.</p>
    </div>
  );
};

export default DataScience;

