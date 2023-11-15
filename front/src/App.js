import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Catalogue from './pages/Catalogue';
import Checkout from './pages/Checkout/Checkout';
import Panier from './pages/Panier/Panier';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path='/catalogue' element={<Catalogue/>} />
        <Route exact path='/panier' element={<Panier/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
