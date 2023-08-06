import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameDropdown = () => {
  const [gameTitles, setGameTitles] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to your backend to fetch game titles
    axios.get('/api/games')
      .then(response => {
        const titles = response.data.map(game => game.title);
        // Sort the titles alphabetically
        const sortedTitles = titles.sort((a, b) => a.localeCompare(b));
        setGameTitles(sortedTitles);
      })
      .catch(error => {
        console.error('Error fetching game titles:', error);
      });
  }, []);

  return (
    <div>
      <label>Select a Game:</label>
      <select>
        <option value="">Choose a game</option>
        {gameTitles.map(title => (
          <option key={title} value={title}>{title}</option>
        ))}
      </select>
    </div>
  );
};

export default GameDropdown;
