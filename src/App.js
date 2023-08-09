import React, { useState, useEffect } from 'react';
import './App.css';
import GameDropdown from './components/gameDropdown';
import SearchBar from './components/searchBar';
import { fetchGameTitles } from './helpers/api'; 
import { toggleDarkMode } from './helpers/darkmodeUtil'; 

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [gameTitles, setGameTitles] = useState([]);

  useEffect(() => {
    // Fetch game titles using the API helper
    fetchGameTitles()
      .then((fullcrossesTitles) => {
        setGameTitles(fullcrossesTitles);
      })
      .catch((error) => {
        console.error('Error fetching game titles:', error);
      });
  }, []);

  const handleSelectGame = (selectedGame) => {
    console.log('Selected game:', selectedGame);
  };

  const handleToggleDarkMode = () => {
    // Toggle dark mode using the dark mode helper
    toggleDarkMode(darkMode, setDarkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <h1>CrossConnect</h1>
        <div className="search-bar">
          <SearchBar onSelectGame={handleSelectGame} gameTitles={gameTitles} darkMode={darkMode} />
        </div>
        <button className="dark-mode-button" onClick={handleToggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      <div className="App">
        <h1>Game Selection</h1>
        <GameDropdown />
      </div>
    </div>
  );
};

export default App;
