import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import PortLogo from '../PortLogo.svg';

const Header: React.FC = () => {
  return (
    <header className="App-header flex items-center justify-between p-4 bg-gray-200 border-b border-gray-300">
      <div className="logo">
        <img src={PortLogo} className="h-4" alt="Port Logo" />
      </div>
      <nav className="nav-container flex-grow text-center">
        <ul className="flex justify-center space-x-4">
          <li><Link to="/" className="hover:text-blue-500">Catalog</Link></li>
          <li><Link to="/manage" className="hover:text-blue-500">Manage</Link></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
