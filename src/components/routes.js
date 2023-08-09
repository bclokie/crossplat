import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameDropdown from './components/GameDropdown';
import Home from './components/Home'; // Create a Home component if needed

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game-selection" element={<GameDropdown />} />
    </Routes>
  );
};

export default AppRoutes;
