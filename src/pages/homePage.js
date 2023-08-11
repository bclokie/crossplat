import React from 'react';
import GameDropdown from '../components/gameDropdown'; 

const HomePage = ({ gameTitles }) => {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Home page content */}
      <GameDropdown gameTitles={gameTitles} />
    </div>
  );
};

export default HomePage;
