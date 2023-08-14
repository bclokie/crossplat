import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GamePage = () => {
  const { gameID } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  // Decode the gameID from URI format to match the title key in the JSON response
  const decodedGameID = decodeURIComponent(gameID);

  useEffect(() => {
    // Fetch game details based on the decoded gameID
    axios.get(`http://localhost:3001/api/test/fullcrosses/${decodedGameID}`)
      .then(response => {
        setGameDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching game details:', error);
      });
  }, [decodedGameID]);

  return (
    <div>
      <nav className="navbar">
        <h1>CrossConnect</h1>
        {/* Add dark mode button */}
      </nav>
      <div className="app">
        <div className="game-details">
          {gameDetails ? (
            <div>
              <h1>{gameDetails.title}</h1>
              <p>Platforms with Crossplay: {gameDetails.platformsWithCrossplay.join(', ')}</p>
              <p>Platforms without Crossplay: {gameDetails.platformsWithoutCrossplay.join(', ')}</p>
              <p>Full Crossplay Ability: {gameDetails.crossEnabled ? 'Yes' : 'No'}</p>
            </div>
          ) : (
            <p>Error fetching game details 😢</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
