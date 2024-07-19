// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DishDetails from './pages/DishDetails';
import WineList from './components/WineList'; // Importa il componente WineList

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/dish/:id" element={<DishDetails />} />
          <Route path="/vini" element={<WineList />} /> {/* Aggiungi la rotta per la carta dei vini */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
