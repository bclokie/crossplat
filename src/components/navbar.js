import React from 'react';
// import SearchBar from './searchBar';

const Navbar = ({ darkMode, handleToggleDarkMode }) => {
  return (
    <nav className="navbar">
      <h1>CrossConnect</h1>
      <button className="dark-mode-button" onClick={handleToggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;


/*   old searchBar code: Undefined error

      <div className="search-bar">
        <SearchBar darkMode={darkMode} />
      </div>

*/