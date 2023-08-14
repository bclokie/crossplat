import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GamePage from './pages/gamePage'; // Import the GamePage component
import Home from './pages/homePage'; // Create a Home component if needed

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games/:gameId" element={<GamePage />} /> 
    </Routes>
  );
};

export default AppRoutes;
