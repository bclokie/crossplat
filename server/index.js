const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Game = require('./models/games.js');
const url = 'mongodb+srv://braden:clokie@crossplat.rueqrcq.mongodb.net/'; 

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/games', async (req, res) => {
  try {
    const games = await Game.find({}, 'title'); // Retrieve only the title field
    res.json(games);
  } catch (error) {
    console.error('Error fetching game titles:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});