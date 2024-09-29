import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Manage from './components/Manage';
import Footer from './components/Footer';

const App = () => {
  return ( 
    <Router>
      <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Catalog />} /> 
          <Route path="/manage" element={<Manage />} /> 
          <Route path="/about" element={<h1>About</h1>} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
