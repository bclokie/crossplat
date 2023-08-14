import React from 'react';
import GameDropdown from '../components/gameDropdown';
import SearchBar from '../components/searchBar';
import { Link } from 'react-router-dom';

const HomePage = ({ darkMode, handleSelectGame, gameTitles, selectedGame, handleToggleDarkMode }) => {
  const handleGamePageLink = () => {
    if (selectedGame) {
      const cleanedGameName = selectedGame.trim(); // Trim any leading/trailing spaces
      const encodedGameName = encodeURIComponent(cleanedGameName);

      return `/games/${encodedGameName}`;
    }
    return '#'; // Return a placeholder if no game is selected
  };

  return (
    <div>
      <nav className="navbar">
        <h1>CrossConnect</h1>
        <div className="search-bar">
          <SearchBar onSelectGame={handleSelectGame} gameTitles={gameTitles} darkMode={darkMode} />
        </div>
        <button className="dark-mode-button" onClick={handleToggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <div className="App">
          <h1>Game Selection</h1>
          <GameDropdown onSelectGame={handleSelectGame} selectedGame={selectedGame} />
          {selectedGame && (
            <div>
              <button className="game-page-button" disabled={!selectedGame}>
                <Link to={handleGamePageLink()}>Go to Game Page</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;