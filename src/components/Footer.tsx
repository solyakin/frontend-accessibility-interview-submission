import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="App-footer">
      <p>&copy; {new Date().getFullYear()} The Dog Catalog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
