import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detalle from './components/Detalle';
import Carrito from './components/Carrito';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detalle />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </>
  );
}

export default App;
