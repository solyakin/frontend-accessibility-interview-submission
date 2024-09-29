import React from 'react';
import PortLogo from '../PortLogo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <div className="logo">
        <img src={PortLogo} className="h-4" alt="Port Logo" />
      </div>
      <nav className="nav-container flex-grow text-center">
        <ul className="flex justify-center space-x-4">
          <li><a href="#catalog">Catalog</a></li>
          <li><a href="#manage">Manage</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
