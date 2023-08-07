import React, { useState } from 'react';

const SearchBar = ({ onSelectGame, gameTitles, darkMode }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Pass the selected game to the parent component
    onSelectGame(searchText);
  };

  const matchingGames = gameTitles.filter(
    (title) =>
      title.toLowerCase().includes(searchText.toLowerCase()) &&
      title !== searchText
  );

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className={`search-bar-container ${darkMode ? 'dark-mode' : ''}`}>
        <input
          type="text"
          placeholder="Search for a game..."
          value={searchText}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </div>
      {searchText && matchingGames.length > 0 && (
        <div className={`matching-games ${darkMode ? 'dark-mode' : ''}`}>
          {matchingGames.slice(0, 6).map((title) => (
            <div
              key={title}
              className="matching-game"
              onClick={() => onSelectGame(title)}
            >
              {title}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
