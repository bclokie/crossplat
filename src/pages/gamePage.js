import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GamePage = () => {
  const { gameID } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  const decodedGameID = decodeURIComponent(gameID);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/test/fullcrosses/${decodedGameID}`)
      .then(response => {
        console.log('API Response:', response.data);
        setGameDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching game details:', error);
      });
  }, [decodedGameID]);

  const renderGameDetails = () => {
    if (!gameDetails) {
      return <p>Error fetching game details 😢</p>;
    }

    return (
      <div>
        <h1>{gameDetails.title}</h1>
        {gameDetails.crossEnabled ? (
          <p>This game has full cross platform support</p>
        ) : (
          <p>This game doesn't support full cross platform play</p>
        )}

        {gameDetails.crossEnabled && (
          <div>
            <p>Platforms with Crossplay: {gameDetails.platformsWithCrossplay.join(', ')}</p>
          </div>
        )}

        {!gameDetails.crossEnabled && gameDetails.platformsWithoutCrossplay.length > 0 && (
          <div>
            <p>Platforms without Crossplay: {gameDetails.platformsWithoutCrossplay.join(', ')}</p>
          </div>
        )}

        {gameDetails.exceptions.length > 0 && (
          <div>
            {gameDetails.exceptions.map((exception, index) => (
              <p key={index}>
                Cross Platform {gameDetails.exceptions.length > 1 ? `Ecosystem #${index + 1}` : 'Ecosystem'}: {exception.split('/').map(platform => platform.trim()).join(', ')}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <nav className="navbar">
        <h1>CrossConnect</h1>
        {/* Add dark mode button */}
      </nav>
      <div className="app">
        <div className="game-details">
          {renderGameDetails()}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
