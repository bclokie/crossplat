const { semiCrossModel, semiCross } = require('./models/semiCrossModel');
const { fullCrossModel, fullCross } = require('./models/fullCrossModel');

// Function to save data to the database
async function saveDataToDB() {
  try {
    // Save semiCross data
    for (const game of semiCross) {
      const existingGame = await semiCrossModel.findOne({ title: game.title });
      if (!existingGame) {
        const semiCrossGame = new semiCrossModel(game);
        await semiCrossGame.save();
        console.log(`Saved ${game.title} to MongoDB`);
      }
    }

    // Save fullCross data
    for (const game of fullCross) {
      const existingGame = await fullCrossModel.findOne({ title: game['Game Title'] });
      if (!existingGame) {
        const fullCrossGame = new fullCrossModel({
          title: game['Game Title'],
          platformsWithCrossplay: game['platformsWithCrossplay'],
        });
        await fullCrossGame.save();
        console.log(`Saved ${game['Game Title']} to MongoDB`)
      }
    }

    console.log('Data saved to MongoDB');
  } catch (error) {
    console.error('Error saving data:', error);
  }
}


module.exports = saveDataToDB;