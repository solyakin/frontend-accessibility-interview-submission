import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import CatalogLogo from '../CatalogLogo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <nav aria-label="Main Navigation">
        <div className="logo">
          <Link 
          to="/"
          aria-label="Go to the home page"
          >
            <img src={CatalogLogo} alt="Dog's Catalog Logo" />
          </Link>
        </div>
      </nav>
      <nav aria-label="Link Navigation" className="nav-container">
        <ul>
          <li>
            <Link 
            to="/"
            aria-label="Go to the catalog page"
            >
            Catalog
            </Link>
          </li>
          <li>
            <Link 
            to="/manage"
            aria-label="Go to the manage page"
            >
              Manage
            </Link>
          </li>
          <li>
            <Link 
            to="/about"
            aria-label="Go to the about page"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
