import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameDropdown = () => {
  const [gameTitles, setGameTitles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch titles from fullcrosses collection
    axios.get('http://localhost:3001/api/test/fullcrosses')
      .then(response => {
        const fullcrossesTitles = response.data;
        if (fullcrossesTitles.length === 0) {
          setError('No game titles found.');
        } else {
          setError(null);
          setGameTitles(fullcrossesTitles.sort()); // Sort titles before setting state
        }
      })
      .catch(error => {
        console.error('Error fetching fullcrosses titles:', error);
        setError('Error fetching game titles.');
      });
  }, []);

  return (
    <div>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div>
          <label>Select a Game:</label>
          <select>
            <option value="">Choose a game</option>
            {gameTitles.map(title => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default GameDropdown;
