import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dinosaurs from './pages/Dinosaurs';
import Story from './pages/Story';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dinosaurs" element={<Dinosaurs />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
