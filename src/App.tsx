// App.tsx
import React from 'react';// Import the Catalog component
import './App.css';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Catalog />
      </main>
      <Footer />
    </div>
  );
};

export default App;
