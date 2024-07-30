import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <div>
      <h1>Career</h1>
      <p>Find career advice and resources here.</p>
      <p>Explore all our <Link to="/">courses</Link> to boost your career.</p>
      <p>Visit our <a href="https://www.guvi.in/current-openings" target="_blank" rel="noopener noreferrer">career opportunities</a> for career resources.</p>
    </div>
  );
};

export default Career;
