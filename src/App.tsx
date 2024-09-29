import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Dog Catalog</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#breeds">Breeds</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Welcome to The Dog Catalog!</h2>
          <p>Discover various dog breeds and learn more about them.</p>
          {/* Placeholder for dog breed cards or images */}
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} The Dog Catalog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
