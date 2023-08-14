import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GamePage from './pages/gamePage'; // Import the GamePage component
import HomePage from './pages/homePage'; // Create a Home component if needed

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/games/:gameId" element={<GamePage />} /> 
    </Routes>
  );
};

export default AppRoutes;
