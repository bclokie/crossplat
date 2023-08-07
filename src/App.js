import React, { useState } from 'react';
import './App.css';
import GameDropdown from './components/gameDropdown';
import SearchBar from './components/searchBar'; 

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

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
          {/* Replace the existing input field with the SearchBar component */}
          <SearchBar onSelectGame={handleSelectGame} />
          <button>Search</button>
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
