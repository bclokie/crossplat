import React, { useState, useEffect, useCallback } from 'react';
import { TextField, Button, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const SearchBar = ({ onSelectGame }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Memoize the handleSuggestionClick function
  const handleSuggestionClick = useCallback(
    (title) => {
      setSearchTerm(title);
      setSuggestions([]); // Clear suggestions
      onSelectGame(title); // Call the onSelectGame function with selected game
    },
    [onSelectGame]
  );

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    axios
      .get(`http://localhost:3001/api/test/fullcrosses/search/${searchTerm}`)
      .then((response) => {
        const titles = response.data;
        setSuggestions(titles.slice(0, 6)); // Limit to 6 suggestions
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching search suggestions:', error);
        setIsLoading(false);
      });
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <TextField
        fullWidth
        label="Search for a game"
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
        InputProps={{
          endAdornment: (
            <Button color="primary" size="small">
              <SearchIcon />
            </Button>
          ),
        }}
      />
      {isLoading ? (
        <CircularProgress style={{ marginTop: 8 }} />
      ) : (
        <List>
          {suggestions.map((title) => (
            <ListItem key={title} button onClick={() => handleSuggestionClick(title)}>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default SearchBar;
