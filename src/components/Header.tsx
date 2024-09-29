import React from 'react';
import './Header.css'; 
import PortLogo from '../PortLogo.svg';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <div className="logo">
        <img src={PortLogo} />
      </div>
      <nav className="nav-container">
        <ul>
          <li><a href="#catalog">Catalog</a></li>
          <li><a href="#manage">Manage</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
