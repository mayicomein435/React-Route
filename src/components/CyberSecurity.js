import React from 'react';
import { Link } from 'react-router-dom';

const CyberSecurity = () => {
  return (
    <div>
      <h1>Cyber Security</h1>
      <p>Discover our Cyber Security programs.</p>
      <p>Looking for career advice? Visit our <Link to="/career">Career</Link> page.</p>
      <p>For additional information, check out our <a href="https://www.guvi.in/blog/category/cyber-security/" target="_blank" rel="noopener noreferrer">CyberSecurity</a>.</p>
    </div>
  );
};

export default CyberSecurity;
