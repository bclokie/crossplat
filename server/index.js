const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const url = 'mongodb+srv://braden:clokie@crossplat.rueqrcq.mongodb.net/';

// Import model
const { fullCrossModel } = require('./models/fullCrossModel');

// Import the saveDataToDB function
const saveDataToDB = require('./saveDataToDB');

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Call the function to save data to the database, passing fullCrossModel
    saveDataToDB(fullCrossModel)
      .then(() => {
        console.log('Ready for React');
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(cors());

app.get('/api/test/fullcrosses', async (req, res) => {
  try {
    const fullcrosses = await fullCrossModel.find({}, 'title');
    if (fullcrosses.length === 0) {
      return res.status(404).json({ error: 'No fullcross titles found.' });
    }
    const titles = fullcrosses.map(item => item.title);
    const sortedTitles = titles.sort((a, b) => a.localeCompare(b));
    res.json(sortedTitles);
  } catch (error) {
    console.error('Error fetching titles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to fetch game details based on title
app.get('/api/test/fullcrosses/:gameTitle', async (req, res) => {
  try {
    const gameTitle = req.params.gameTitle;

    // Use gameTitle to find the game details based on the title
    const gameDetails = await fullCrossModel.findOne({ title: gameTitle });

    if (!gameDetails) {
      return res.status(404).json({ error: 'Game not found.' });
    }

    res.json(gameDetails);
  } catch (error) {
    console.error('Error fetching game details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});