import React from 'react';
import './App.css';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <h2>Welcome to The Dog Catalog!</h2>
          <p>Discover various dog breeds and learn more about them.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} The Dog Catalog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
