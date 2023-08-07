const mongoose = require('mongoose');

const fullCrossModel = mongoose.model('FullCross', {
  title: String,
  platformsWithCrossplay: [String],
  platformsWithoutCrossplay: [String],
});

const fullCross = [
  {
    "Game Title": "Among Us",
    "platformsWithCrossplay": ["Android", "iOS", "PC", "Nintendo Switch"]
  },
  {
    "Game Title": "Apex Legends",
    "platformsWithCrossplay": ["Xbox One", "PS4", "PC", "Switch"]
  },
  {
    "Game Title": "Back 4 Blood",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Borderlands 3",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Brawlhalla",
    "platformsWithCrossplay": ["Switch", "Xbox One", "PS4", "PC"]
  },
  {
    "Game Title": "Call of Duty: Black Ops Cold War",
    "platformsWithCrossplay": ["PS4", "Xbox One", "PC", "Xbox Series X", "Xbox Series X"]
  },
  {
    "Game Title": "Call of Duty: Modern Warfare",
    "platformsWithCrossplay": ["Xbox One", "PS4", "PC"]
  },
  {
    "Game Title": "Call of Duty: Modern Warfare 2",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Call of Duty: Warzone",
    "platformsWithCrossplay": ["PS4", "Xbox One", "PC", "Xbox Series X", "PS5"]
  },
  {
    "Game Title": "Call of Duty: Warzone 2",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Call of Duty: Vanguard",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Chivalry 2",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Dauntless",
    "platformsWithCrossplay": ["PS4", "Xbox One", "PC", "Switch"]
  },
  {
    "Game Title": "Dead by Daylight",
    "platformsWithCrossplay": ["Switch", "Xbox One", "PS4", "PC"]
  },
  {
    "Game Title": "Deathloop",
    "platformsWithCrossplay": ["PS5", "Xbox Series X/S"]
  },
  {
    "Game Title": "Destiny 2",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Diablo 4",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Evil Dead: The Game",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
  },
  {
    "Game Title": "F1 22",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Fantasy Strike",
    "platformsWithCrossplay": ["PS4", "Switch", "Mac", "PC (including Linux)"]
  },
  {
    "Game Title": "Farming Simulator 22",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Final Fantasy XIV: A Realm Reborn",
    "platformsWithCrossplay": ["PS4", "PC", "Mac"]
  },
  {
    "Game Title": "Fortnite",
    "platformsWithCrossplay": ["PS4", "Xbox One", "Switch", "PC", "mobile", "Xbox Series X", "PS5"]
  },
  {
    "Game Title": "For Honor",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Genshin Impact",
    "platformsWithCrossplay": ["PC", "PS4", "Android", "iOS"]
  },
  {
    "Game Title": "Ghostbusters Spirits Unleashed",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "GRID Legends",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Hood: Outlaws and Legends",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Madden NFL 22",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Matchpoint Tennis Championships",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC", "Switch"]
  },
  {
    "Game Title": "Minecraft",
    "platformsWithCrossplay": ["Xbox One", "PS4", "Switch", "PC", "mobile"]
  },
  {
    "Game Title": "Minecraft Dungeons",
    "platformsWithCrossplay": ["PC", "Xbox One", "PS4", "Switch"]
  },
  {
    "Game Title": "MLB The Show 21",
    "platformsWithCrossplay": ["Xbox Series X", "PS5", "Xbox One", "PS4"]
  },
  {
    "Game Title": "MLB The Show 23",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC", "Switch"]
  },
  {
    "Game Title": "Monster Hunter: Rise",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC", "Switch"]
  },
  {
    "Game Title": "MultiVersus",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Need for Speed: Heat",
    "platformsWithCrossplay": ["PS4", "Xbox One", "PC"]
  },
  {
    "Game Title": "Nerf Legends",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "No Man’s Sky",
    "platformsWithCrossplay": ["PS4", "Xbox One", "PC"]
  },
  {
    "Game Title": "Overcooked: All you can Eat",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Switch", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Overwatch 2",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Switch", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Paladins: Champions of the Realm",
    "platformsWithCrossplay": ["Xbox One", "Switch", "PC", "PS4"]
  },
  {
    "Game Title": "PGA Tour 2K23",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Pokemon Unite",
    "platformsWithCrossplay": ["Switch", "Mobile"]
  },
  {
    "Game Title": "Power Rangers: Battle for the Grid",
    "platformsWithCrossplay": ["Switch", "Xbox One", "PS4", "PC"]
  },
  {
    "Game Title": "Quake",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
  },
  {
    "Game Title": "Rainbow Six Extraction",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Realm Royale",
    "platformsWithCrossplay": ["Xbox One", "Switch", "PC", "PS4"]
  },
  {
    "Game Title": "Resident Evil Re:Verse",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Riders Republic",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  }, 
  {
    "Game Title": "Rocket League",
    "platformsWithCrossplay": ["Xbox One", "Switch", "PC", "PS4"]
  },
  {
    "Game Title": "Rogue Company",
    "platformsWithCrossplay": ["PS4", "Nintendo Switch", "PC", "Xbox One", "Xbox Series X"]
  },
  {
    "Game Title": "Secret Neighbor",
    "platformsWithCrossplay": ["PC", "PS4", "Xbox One", "Switch"]
  },
  {
    "Game Title": "SMITE",
    "platformsWithCrossplay": ["Xbox One", "Switch", "PC", "PS4"]
  },
  {
    "Game Title": "Splitgate",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Star Wars: Squadrons",
    "platformsWithCrossplay": ["Xbox One", "PS4", "PC"]
  },
  {
    "Game Title": "Street Fighter 6",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Suicide Squad: Kill the Justice League",
    "platformsWithCrossplay": ["PS5", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Super Animal Royale",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
  },
  {
    "Game Title": "Super Bomberman R Online",
    "platformsWithCrossplay": ["PC", "PS4", "Xbox One", "Switch"]
  },
  {
    "Game Title": "Super Mega Baseball 2",
    "platformsWithCrossplay": ["PS4", "Xbox One", "PC", "Switch"]
  },
  {
    "Game Title": "Super Mega Baseball 3",
    "platformsWithCrossplay": ["PS4", "Xbox One", "PC", "Switch"]
  },
  {
    "Game Title": "The Ascent",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Them’s Fightin’ Herds",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Tiny Tina’s Wonderlands",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Warframe",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch", "PC"]
  },
  {
    "Game Title": "Wild Hearts",
    "platformsWithCrossplay": ["PS5", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Wo Long: Fallen Dynasty",
    "platformsWithCrossplay": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Worms: Rumble",
    "platformsWithCrossplay": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
  },
  {
    "Game Title": "World of Warships: Legends",
    "platformsWithCrossplay": ["PS4", "Xbox One", "PC"]
  },
  {
    "Game Title": "World War Z",
    "platformsWithCrossplay": ["Epic Games Store", "Xbox One", "PC"]
  },
  {
    "Game Title": "WWE 2k: Battlegrounds",
    "platformsWithCrossplay": ["PC", "PS4", "Xbox One"]
  }
];

module.exports = { fullCrossModel, fullCross };