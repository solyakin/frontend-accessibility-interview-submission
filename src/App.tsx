import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Manage from './components/Manage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Catalog />} /> 
          <Route path="/manage" element={<Manage />} /> 
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
