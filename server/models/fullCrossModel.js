const mongoose = require('mongoose');

const fullCrossModel = mongoose.model('FullCross', {
  title: String,
  platformsWithCrossplay: [String],
  platformsWithoutCrossplay: [String],
  crossEnabled: Boolean,
  exceptions: [String],
  storeLinks: [String],
});

module.exports = { fullCrossModel };

/* Non-JSON game list below

let fullCross = [
  {
    "title": "#IDARB",
    "platformsWithCrossplay": [
      "Xbox One",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Among Us",
    "platformsWithCrossplay": [
      "Android",
      "iOS",
      "PC",
      "Nintendo Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Apex Legends",
    "platformsWithCrossplay": [
      "Xbox One",
      "PS4",
      "PC",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Aragami",
    "platformsWithCrossplay": [
      "Xbox One",
      "PC"
    ],
    "platformsWithoutCrossplay": [
      "Switch/PS4",
      "PC"
    ],
    "crossEnabled": false
  },
  {
    "title": "Ark: Survival Evolved",
    "platformsWithCrossplay": [
      "Xbox One",
      "PS4",
      "PC",
      "Switch"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Astroneer",
    "platformsWithCrossplay": [
      "Xbox One",
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Atom Universe",
    "platformsWithCrossplay": [
      "PC",
      "PS4"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Back 4 Blood",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Battlefield 2042",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One"
    ],
    "platformsWithoutCrossplay": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "crossEnabled": false
  },
  {
    "title": "Black Desert Online",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Blobcat",
    "platformsWithCrossplay": [
      "Switch",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Borderlands 3",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Boundless",
    "platformsWithCrossplay": [
      "PC",
      "PS4"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Brawlhalla",
    "platformsWithCrossplay": [
      "Switch",
      "Xbox One",
      "PS4",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Call of Duty: Black Ops Cold War",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One",
      "PC",
      "Xbox Series X",
      "Xbox Series X"
    ],
    "crossEnabled": true
  },
  {
    "title": "Call of Duty: Modern Warfare",
    "platformsWithCrossplay": [
      "Xbox One",
      "PS4",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Call of Duty: Modern Warfare 2",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Call of Duty: Vanguard",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Call of Duty: Warzone",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One",
      "PC",
      "Xbox Series X",
      "PS5"
    ],
    "crossEnabled": true
  },
  {
    "title": "Call of Duty: Warzone 2",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Chess Ultra",
    "platformsWithCrossplay": [
      "Xbox One",
      "Switch",
      "PC"
    ],
    "platformsWithoutCrossplay": [
      "PC",
      "PS4"
    ],
    "crossEnabled": false
  },
  {
    "title": "Chivalry 2",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Crazy Justice",
    "platformsWithCrossplay": [
      "PC",
      "Switch",
      "Xbox One"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Dauntless",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One",
      "PC",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Dawn of the Breakers",
    "platformsWithCrossplay": [
      "PC",
      "Switch"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "DC Universe Online",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Dead by Daylight",
    "platformsWithCrossplay": [
      "Switch",
      "Xbox One",
      "PS4",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Deathloop",
    "platformsWithCrossplay": [
      "PS5",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Deep Rock Galactic",
    "platformsWithCrossplay": [
      "Xbox One",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Destiny 2",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Diablo 4",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Diablo: Immortal",
    "platformsWithCrossplay": [
      "PC",
      "Mobile"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Dick Wilde 2",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Disc Jam",
    "platformsWithCrossplay": [
      "Switch",
      "PC"
    ],
    "platformsWithoutCrossplay": [
      "PC",
      "PS4"
    ],
    "crossEnabled": false
  },
  {
    "title": "Divine-Knockout",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Dragon Quest Builders 2",
    "platformsWithCrossplay": [
      "Switch",
      "PS4"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Eagle Flight",
    "platformsWithCrossplay": [
      "PC",
      "PS4"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Eve: Valkyrie",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Evil Dead: The Game",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Exoprimal",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Exorder",
    "platformsWithCrossplay": [
      "PC",
      "Switch"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "F1 22",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Fantasy Strike",
    "platformsWithCrossplay": [
      "PS4",
      "Switch",
      "Mac",
      "PC (including Linux)"
    ],
    "crossEnabled": true
  },
  {
    "title": "Farming Simulator 22",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Final Fantasy XIV: A Realm Reborn",
    "platformsWithCrossplay": [
      "PS4",
      "PC",
      "Mac"
    ],
    "crossEnabled": true
  },
  {
    "title": "Final Fantasy XV",
    "platformsWithCrossplay": [
      "Windows 10",
      "Xbox One"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "For Honor",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Fortnite",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One",
      "Switch",
      "PC",
      "mobile",
      "Xbox Series X",
      "PS5"
    ],
    "crossEnabled": true
  },
  {
    "title": "Forza Horizon 5",
    "platformsWithCrossplay": [
      "PC",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Full Metal Furies",
    "platformsWithCrossplay": [
      "Xbox One",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Games of Glory",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Generation Zero",
    "platformsWithCrossplay": [
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Genshin Impact",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "Android",
      "iOS"
    ],
    "crossEnabled": true
  },
  {
    "title": "Ghostbusters Spirits Unleashed",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "GRID Legends",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Grounded",
    "platformsWithCrossplay": [
      "PC",
      "Xbox One"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Guilty Gear: Strive",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Gunfire Reborn",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "Switch",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Guns of Icarus Online",
    "platformsWithCrossplay": [
      "PS4",
      "PC",
      "Mac"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Guns Up",
    "platformsWithCrossplay": [
      "PC",
      "PS4"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Halo Infinite",
    "platformsWithCrossplay": [
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Happy Wars",
    "platformsWithCrossplay": [
      "Xbox One",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Hearthstone",
    "platformsWithCrossplay": [
      "PC",
      "Mac",
      "iOS",
      "Android"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Hero Siege",
    "platformsWithCrossplay": [
      "PC",
      "Mac",
      "mobile",
      "Switch"
    ],
    "platformsWithoutCrossplay": [
      "PC",
      "Mac",
      "mobile",
      "PS4"
    ],
    "crossEnabled": false
  },
  {
    "title": "Hex",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Hood: Outlaws and Legends",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Hover",
    "platformsWithCrossplay": [
      "Xbox One",
      "Switch",
      "PC"
    ],
    "platformsWithoutCrossplay": [
      "PC",
      "PS4"
    ],
    "crossEnabled": false
  },
  {
    "title": "Hunter’s Arena: Legends",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Kabounce",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Killer Queen Black",
    "platformsWithCrossplay": [
      "PC",
      "Switch",
      "Xbox One"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Madden NFL 22",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Mantis Burn Racing",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [
      "Switch",
      "Xbox One",
      "PC"
    ],
    "crossEnabled": false
  },
  {
    "title": "Matchpoint Tennis Championships",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "MechWarrior 5: Mercenaries",
    "platformsWithCrossplay": [
      "PC",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Minecraft",
    "platformsWithCrossplay": [
      "Xbox One",
      "PS4",
      "Switch",
      "PC",
      "mobile"
    ],
    "crossEnabled": true
  },
  {
    "title": "Minecraft Dungeons",
    "platformsWithCrossplay": [
      "PC",
      "Xbox One",
      "PS4",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "MLB The Show 21",
    "platformsWithCrossplay": [
      "Xbox Series X",
      "PS5",
      "Xbox One",
      "PS4"
    ],
    "crossEnabled": true
  },
  {
    "title": "MLB The Show 23",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Monster Hunter: Rise",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Mortal Kombat 11",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "MultiVersus",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Mushroom Wars 2",
    "platformsWithCrossplay": [
      "Switch",
      "PC",
      "Mac",
      "mobile"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "NBA 2K Playgrounds 2",
    "platformsWithCrossplay": [
      "Xbox One",
      "PS4",
      "Switch",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Need for Speed: Heat",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Nerf Legends",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Neverwinter",
    "platformsWithCrossplay": [
      "PC",
      "Switch",
      "Xbox One"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Next Up Hero",
    "platformsWithCrossplay": [
      "Xbox One",
      "Switch",
      "Mac",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "No Man’s Sky",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Onigiri",
    "platformsWithCrossplay": [
      "PC",
      "Switch"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Outriders",
    "platformsWithCrossplay": [
      "PC",
      "Xbox Series X",
      "PS5"
    ],
    "platformsWithoutCrossplay": [
      "PC/console crossplay"
    ],
    "crossEnabled": false
  },
  {
    "title": "Overcooked: All you can Eat",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Switch",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Overload",
    "platformsWithCrossplay": [
      "Xbox One",
      "PC"
    ],
    "platformsWithoutCrossplay": [
      "PS4",
      "PC"
    ],
    "crossEnabled": false
  },
  {
    "title": "Overwatch 2",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Switch",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Paladins: Champions of the Realm",
    "platformsWithCrossplay": [
      "Xbox One",
      "Switch",
      "PC",
      "PS4"
    ],
    "crossEnabled": true
  },
  {
    "title": "PGA Tour 2K23",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Phantasy Star Online 2",
    "platformsWithCrossplay": [
      "Xbox One",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Pinball FX 3",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [
      "Switch",
      "Xbox One",
      "PC"
    ],
    "crossEnabled": false
  },
  {
    "title": "PlayerUnknown’s Battlegrounds",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Pokemon Unite",
    "platformsWithCrossplay": [
      "Switch",
      "Mobile"
    ],
    "crossEnabled": true
  },
  {
    "title": "Power Rangers: Battle for the Grid",
    "platformsWithCrossplay": [
      "Switch",
      "Xbox One",
      "PS4",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Powerwash Simulator",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "Switch",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Pox Nora",
    "platformsWithCrossplay": [
      "PS4",
      "PC",
      "Mac"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Pure Chess",
    "platformsWithCrossplay": [
      "PS4",
      "PC",
      "3DS"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Quake",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Rainbow Six Extraction",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Rainbow Six Siege",
    "platformsWithCrossplay": [
      "Xbox One",
      "Xbox Series X/S"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Realm Royale",
    "platformsWithCrossplay": [
      "Xbox One",
      "Switch",
      "PC",
      "PS4"
    ],
    "crossEnabled": true
  },
  {
    "title": "Rec Room",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Redfall",
    "platformsWithCrossplay": [
      "Xbox Series X/S",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Resident Evil Re:Verse",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Riders Republic",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Riptide GP Renegade",
    "platformsWithCrossplay": [
      "Switch",
      "PC"
    ],
    "platformsWithoutCrossplay": [
      "Xbox One",
      "PC"
    ],
    "crossEnabled": false
  },
  {
    "title": "Roblox",
    "platformsWithCrossplay": [
      "Xbox One",
      "PC",
      "Mac",
      "mobile"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Rocket League",
    "platformsWithCrossplay": [
      "Xbox One",
      "Switch",
      "PC",
      "PS4"
    ],
    "crossEnabled": true
  },
  {
    "title": "Rogue Company",
    "platformsWithCrossplay": [
      "PS4",
      "Nintendo Switch",
      "PC",
      "Xbox One",
      "Xbox Series X"
    ],
    "crossEnabled": true
  },
  {
    "title": "Secret Neighbor",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Siegecraft Commander",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [
      "Switch",
      "Xbox One",
      "PC"
    ],
    "crossEnabled": false
  },
  {
    "title": "SMITE",
    "platformsWithCrossplay": [
      "Xbox One",
      "Switch",
      "PC",
      "PS4"
    ],
    "crossEnabled": true
  },
  {
    "title": "Sniper Elite V2 Remastered",
    "platformsWithCrossplay": [
      "Xbox One",
      "PS4",
      "Switch",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Spacelords",
    "platformsWithCrossplay": [
      "PS4",
      "PC",
      "Xbox One"
    ],
    "platformsWithoutCrossplay": [
      "PC"
    ],
    "crossEnabled": false
  },
  {
    "title": "Splitgate",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Sports Bar VR",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Square Heroes",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Star Trek: Bridge Crew",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Star Wars: Squadrons",
    "platformsWithCrossplay": [
      "Xbox One",
      "PS4",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Street Fighter 6",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "crossEnabled": true
  },
  {
    "title": "Street Fighter V",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Streets of Rage 4",
    "platformsWithCrossplay": [
      "PC",
      "Xbox One"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Suicide Squad: Kill the Justice League",
    "platformsWithCrossplay": [
      "PS5",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Super Animal Royale",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Super Bomberman R Online",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Super Dungeon Bros",
    "platformsWithCrossplay": [
      "PS4",
      "PC",
      "Mac"
    ],
    "platformsWithoutCrossplay": [
      "Xbox One",
      "PC"
    ],
    "crossEnabled": false
  },
  {
    "title": "Super Mega Baseball 2",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One",
      "PC",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Super Mega Baseball 3",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One",
      "PC",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "Tetris Effect: Connected",
    "platformsWithCrossplay": [
      "PC",
      "Xbox One",
      "Xbox Series X/S"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "The Ascent",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Them’s Fightin’ Herds",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Tiny Tina’s Wonderlands",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Tooth and Tail",
    "platformsWithCrossplay": [
      "PS4",
      "PC",
      "Mac"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Trailblazers",
    "platformsWithCrossplay": [
      "PS4",
      "PC",
      "Mac"
    ],
    "platformsWithoutCrossplay": [
      "Xbox One",
      "Switch",
      "PC"
    ],
    "crossEnabled": false
  },
  {
    "title": "Treasure Stack",
    "platformsWithCrossplay": [
      "Xbox One",
      "Switch",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Ultimate Chicken Horse",
    "platformsWithCrossplay": [
      "PS4",
      "PC",
      "Mac"
    ],
    "platformsWithoutCrossplay": [
      "Switch",
      "PC",
      "Mac"
    ],
    "crossEnabled": false
  },
  {
    "title": "Valheim",
    "platformsWithCrossplay": [
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "War Thunder",
    "platformsWithCrossplay": [
      "PS4",
      "PC",
      "Mac"
    ],
    "platformsWithoutCrossplay": [
      "Xbox One"
    ],
    "crossEnabled": false
  },
  {
    "title": "Warframe",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "Switch",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Wargroove",
    "platformsWithCrossplay": [
      "Switch",
      "PS4",
      "Xbox One",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Weapons of Mythology: New Age",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Werewolves Within",
    "platformsWithCrossplay": [
      "PS4",
      "PC"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "Wild Hearts",
    "platformsWithCrossplay": [
      "PS5",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Wo Long: Fallen Dynasty",
    "platformsWithCrossplay": [
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "World of Tanks",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One"
    ],
    "platformsWithoutCrossplay": [],
    "crossEnabled": false
  },
  {
    "title": "World of Warships: Legends",
    "platformsWithCrossplay": [
      "PS4",
      "Xbox One",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "World War Z",
    "platformsWithCrossplay": [
      "Epic Games Store",
      "Xbox One",
      "PC"
    ],
    "crossEnabled": true
  },
  {
    "title": "Worms: Rumble",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "Switch"
    ],
    "crossEnabled": true
  },
  {
    "title": "WWE 2k: Battlegrounds",
    "platformsWithCrossplay": [
      "PC",
      "PS4",
      "Xbox One"
    ],
    "crossEnabled": true
  }
];

*/

// exceptions: [String] - ex. 'Xbox App (PC) and Xbox', 'PS4 and PS5'
// storeLinks: [String] - ex. 'https://www.epicgames.com/store/en-US/product/rocket-league/home', 'https://www.nintendo.com/games/detail/rocket-league-switch/'