import React, { useState, useEffect } from 'react';
import './App.css';
import GameDropdown from './components/gameDropdown';
import SearchBar from './components/searchBar'; 
import axios from 'axios';  // Import axios for making API requests

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [gameTitles, setGameTitles] = useState([]);  // Initialize an empty array for game titles

  useEffect(() => {
    // Fetch game titles from your API here
    axios.get('http://localhost:3001/api/test/fullcrosses')
      .then(response => {
        const fullcrossesTitles = response.data;
        setGameTitles(fullcrossesTitles);
      })
      .catch(error => {
        console.error('Error fetching game titles:', error);
      });
  }, []);  // Empty dependency array means this effect runs only once on component mount

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSelectGame = (selectedGame) => {
    // Do something with the selected game, such as updating state
    console.log('Selected game:', selectedGame);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <h1>CrossConnect</h1>
        <div className="search-bar">
          {/* Pass the gameTitles array to the SearchBar component */}
          <SearchBar onSelectGame={handleSelectGame} gameTitles={gameTitles} darkMode={darkMode} />
        </div>
        <button className="dark-mode-button" onClick={toggleDarkMode}>
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