// Function to save data to the database
async function saveDataToDB(fullCrossModel) {
  try {
    // Import the JSON data from the file
    const jsonData = require('./gameList.json');
    const games = jsonData;

    let changesMade = false; // Flag to track if any changes were made

    // Save data
    for (const game of games) {
      const existingGame = await fullCrossModel.findOne({ title: game.title });
      if (!existingGame) {
        // Create a newGame instance and populate it with data from the JSON file
        const newGame = new fullCrossModel({
          title: game.title,
          platformsWithCrossplay: game.platformsWithCrossplay,
          platformsWithoutCrossplay: game.platformsWithoutCrossplay,
          crossEnabled: game.crossEnabled,
          exceptions: game.exceptions,
          storeLinks: game.storeLinks
        });
        await newGame.save();
        console.log(`Saved ${game.title} to MongoDB`);
        changesMade = true; // Set the flag to true
      }
    }

    if (changesMade) {
      console.log('Data saved to MongoDB');
    } else {
      console.log('No changes necessary');
    }
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

module.exports = saveDataToDB;