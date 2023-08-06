import React, { useState } from 'react';
import './App.css';
import GameDropdown from './components/gameDropdown';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <h1>CrossPlat</h1>
        <div className="search-bar">
          <input type="text" placeholder="What game are you searching for?" />
          <button>Search</button>
        </div>
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      <div className="content">
        <div className="App">
        <h1>Game Selection</h1>
        <GameDropdown />
      </div>      
      </div>
    </div>
  );
};

export default App;
