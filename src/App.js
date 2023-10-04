import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/homePage'; 
import GamePage from './pages/gamePage';
import { fetchGameTitles } from './helpers/api';
import { toggleDarkMode } from './helpers/darkmodeUtil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [gameTitles, setGameTitles] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetchGameTitles()
      .then((fullcrossesTitles) => {
        setGameTitles(fullcrossesTitles);
      })
      .catch((error) => {
        console.error('Error fetching game titles:', error);
      });
  }, []);                                                                                                                                                                                                   

  const handleSelectGame = (selectedGame) => {
    setSelectedGame(selectedGame);
  };
  
  const handleToggleDarkMode = () => {
    toggleDarkMode(darkMode, setDarkMode);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              darkMode={darkMode}
              handleSelectGame={handleSelectGame}
              gameTitles={gameTitles}
              selectedGame={selectedGame}
              handleToggleDarkMode={handleToggleDarkMode}
            />
          }
        />
        <Route path="/games/:gameID" element={<GamePage />} />
      </Routes>
    </Router>
  );
};

export default App;