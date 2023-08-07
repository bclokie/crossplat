const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const url = 'mongodb+srv://braden:clokie@crossplat.rueqrcq.mongodb.net/';

// Import models
const { semiCrossModel } = require('./models/semiCrossModel');
const { fullCrossModel } = require('./models/fullCrossModel');

// Import the saveDataToDB function
const saveDataToDB = require('./saveDataToDB');

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Call the function to save data to the database
    saveDataToDB()
      .then(() => {
        console.log('Data saved to MongoDB');
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(cors());

app.get('/api/test/semicrosses', async (req, res) => { // Add a slash before 'api/test/semicrosses'
  try {
    const semicrosses = await semiCrossModel.find({}, 'title');
    if (semicrosses.length === 0) {
      return res.status(404).json({ error: 'No semicross titles found.' });
    }
    const titles = semicrosses.map(item => item.title);
    const sortedTitles = titles.sort((a, b) => a.localeCompare(b));
    res.json(sortedTitles);
  } catch (error) {
    console.error('Error fetching semicross titles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/test/fullcrosses', async (req, res) => { // Add a slash before 'api/test/fullcrosses'
  try {
    const fullcrosses = await fullCrossModel.find({}, 'title');
    if (fullcrosses.length === 0) {
      return res.status(404).json({ error: 'No fullcross titles found.' });
    }
    const titles = fullcrosses.map(item => item.title);
    const sortedTitles = titles.sort((a, b) => a.localeCompare(b));
    res.json(sortedTitles);
  } catch (error) {
    console.error('Error fetching fullcross titles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
