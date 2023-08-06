const mongoose = require('mongoose');

const url = 'mongodb+srv://braden:clokie@crossplat.rueqrcq.mongodb.net/'; // Replace with your MongoDB server URL and database name

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Define your data models and perform database operations here

//////////////////////////////////////////////
//////// Games with partial crossplay ////////
//////////////////////////////////////////////

const fullCross = [
  {
    title: "#IDARB",
    platformsWithCrossplay: ["Xbox One", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Atom Universe",
    platformsWithCrossplay: ["PC", "PS4"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Aragami",
    platformsWithCrossplay: ["Xbox One", "PC"],
    platformsWithoutCrossplay: ["Switch/PS4", "PC"],
  },
  {
    title: "Ark: Survival Evolved",
    platformsWithCrossplay: ["Xbox One", "PS4", "PC", "Switch"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Astroneer",
    platformsWithCrossplay: ["Xbox One", "PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Battlefield 2042",
    platformsWithCrossplay: ["PS4", "Xbox One"],
    platformsWithoutCrossplay: ["PC", "PS5", "Xbox Series X/S"],
  },
  {
    title: "Black Desert Online",
    platformsWithCrossplay: ["PS4", "Xbox One"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Blobcat",
    platformsWithCrossplay: ["Switch", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Boundless",
    platformsWithCrossplay: ["PC", "PS4"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Chess Ultra",
    platformsWithCrossplay: ["Xbox One", "Switch", "PC"],
    platformsWithoutCrossplay: ["PC", "PS4"],
  },
  {
    title: "Crazy Justice",
    platformsWithCrossplay: ["PC", "Switch", "Xbox One"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Dawn of the Breakers",
    platformsWithCrossplay: ["PC", "Switch"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "DC Universe Online",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Deep Rock Galactic",
    platformsWithCrossplay: ["Xbox One", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Diablo: Immortal",
    platformsWithCrossplay: ["PC", "Mobile"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Dick Wilde 2",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Disc Jam",
    platformsWithCrossplay: ["Switch", "PC"],
    platformsWithoutCrossplay: ["PC", "PS4"],
  },
  {
    title: "Divine-Knockout",
    platformsWithCrossplay: ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Dragon Quest Builders 2",
    platformsWithCrossplay: ["Switch", "PS4"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Eve: Valkyrie",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Eagle Flight",
    platformsWithCrossplay: ["PC", "PS4"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Exoprimal",
    platformsWithCrossplay: ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Exorder",
    platformsWithCrossplay: ["PC", "Switch"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Forza Horizon 5",
    platformsWithCrossplay: ["PC", "Xbox One", "Xbox Series X/S"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Final Fantasy XV",
    platformsWithCrossplay: ["Windows 10", "Xbox One"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Full Metal Furies",
    platformsWithCrossplay: ["Xbox One", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Games of Glory",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Generation Zero",
    platformsWithCrossplay: ["Xbox One", "Xbox Series X/S", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Grounded",
    platformsWithCrossplay: ["PC", "Xbox One"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Guilty Gear: Strive",
    platformsWithCrossplay: ["PC", "PS4", "PS5"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Gunfire Reborn",
    platformsWithCrossplay: ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Guns of Icarus Online",
    platformsWithCrossplay: ["PS4", "PC", "Mac"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Guns Up",
    platformsWithCrossplay: ["PC", "PS4"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Halo Infinite",
    platformsWithCrossplay: ["Xbox One", "Xbox Series X/S", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Happy Wars",
    platformsWithCrossplay: ["Xbox One", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Hearthstone",
    platformsWithCrossplay: ["PC", "Mac", "iOS", "Android"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Hero Siege",
    platformsWithCrossplay: ["PC", "Mac", "mobile", "Switch"],
    platformsWithoutCrossplay: ["PC", "Mac", "mobile", "PS4"],
  },
  {
    title: "Hex",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Hover",
    platformsWithCrossplay: ["Xbox One", "Switch", "PC"],
    platformsWithoutCrossplay: ["PC", "PS4"],
  },
  {
    title: "Hunter’s Arena: Legends",
    platformsWithCrossplay: ["PC", "PS4", "PS5"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Kabounce",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Killer Queen Black",
    platformsWithCrossplay: ["PC", "Switch", "Xbox One"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Mantis Burn Racing",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: ["Switch", "Xbox One", "PC"],
  },
  {
    title: "MechWarrior 5: Mercenaries",
    platformsWithCrossplay: ["PC", "Xbox One", "Xbox Series X/S"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Mortal Kombat 11",
    platformsWithCrossplay: ["PS4", "Xbox One", "Switch"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Mushroom Wars 2",
    platformsWithCrossplay: ["Switch", "PC", "Mac", "mobile"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "NBA 2K Playgrounds 2",
    platformsWithCrossplay: ["Xbox One", "PS4", "Switch", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Next Up Hero",
    platformsWithCrossplay: ["Xbox One", "Switch", "Mac", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Neverwinter",
    platformsWithCrossplay: ["PC", "Switch", "Xbox One"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Onigiri",
    platformsWithCrossplay: ["PC", "Switch"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Overload",
    platformsWithCrossplay: ["Xbox One", "PC"],
    platformsWithoutCrossplay: ["PS4", "PC"],
  },
  {
    title: "Outriders",
    platformsWithCrossplay: ["PC", "Xbox Series X", "PS5"],
    platformsWithoutCrossplay: ["PC/console crossplay"],
  },
  {
    title: "Powerwash Simulator",
    platformsWithCrossplay: ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Phantasy Star Online 2",
    platformsWithCrossplay: ["Xbox One", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Pinball FX 3",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: ["Switch", "Xbox One", "PC"],
  },
  {
    title: "PlayerUnknown’s Battlegrounds",
    platformsWithCrossplay: ["PS4", "Xbox One"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Pox Nora",
    platformsWithCrossplay: ["PS4", "PC", "Mac"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Pure Chess",
    platformsWithCrossplay: ["PS4", "PC", "3DS"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Rainbow Six Siege",
    platformsWithCrossplay: ["Xbox One", "Xbox Series X/S"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Rec Room",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Redfall",
    platformsWithCrossplay: ["Xbox Series X/S", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Riptide GP Renegade",
    platformsWithCrossplay: ["Switch", "PC"],
    platformsWithoutCrossplay: ["Xbox One", "PC"],
  },
  {
    title: "Roblox",
    platformsWithCrossplay: ["Xbox One", "PC", "Mac", "mobile"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Siegecraft Commander",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: ["Switch", "Xbox One", "PC"],
  },
  {
    title: "Sniper Elite V2 Remastered",
    platformsWithCrossplay: ["Xbox One", "PS4", "Switch", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Spacelords",
    platformsWithCrossplay: ["PS4", "PC", "Xbox One"],
    platformsWithoutCrossplay: ["PC"],
  },
  {
    title: "Sports Bar VR",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Star Trek: Bridge Crew",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Street Fighter V",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Streets of Rage 4",
    platformsWithCrossplay: ["PC", "Xbox One"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Square Heroes",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Super Dungeon Bros",
    platformsWithCrossplay: ["PS4", "PC", "Mac"],
    platformsWithoutCrossplay: ["Xbox One", "PC"],
  },
  {
    title: "Tetris Effect: Connected",
    platformsWithCrossplay: ["PC", "Xbox One", "Xbox Series X/S"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Trailblazers",
    platformsWithCrossplay: ["PS4", "PC", "Mac"],
    platformsWithoutCrossplay: ["Xbox One", "Switch", "PC"],
  },
  {
    title: "Treasure Stack",
    platformsWithCrossplay: ["Xbox One", "Switch", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Tooth and Tail",
    platformsWithCrossplay: ["PS4", "PC", "Mac"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Ultimate Chicken Horse",
    platformsWithCrossplay: ["PS4", "PC", "Mac"],
    platformsWithoutCrossplay: ["Switch", "PC", "Mac"],
  },
  {
    title: "Valheim",
    platformsWithCrossplay: ["Xbox One", "Xbox Series X/S", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "War Thunder",
    platformsWithCrossplay: ["PS4", "PC", "Mac"],
    platformsWithoutCrossplay: ["Xbox One"],
  },
  {
    title: "Wargroove",
    platformsWithCrossplay: ["Switch", "PS4", "Xbox One", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Weapons of Mythology: New Age",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "Werewolves Within",
    platformsWithCrossplay: ["PS4", "PC"],
    platformsWithoutCrossplay: [],
  },
  {
    title: "World of Tanks",
    platformsWithCrossplay: ["PS4", "Xbox One"],
    platformsWithoutCrossplay: [],
  },
];

///////////////////////////////////////////
//////// Games with full crossplay ////////
///////////////////////////////////////////

const fullCross = [
  {
    "Game Title": "Among Us",
    "Platforms Available": ["Android", "iOS", "PC", "Nintendo Switch"]
  },
  {
    "Game Title": "Apex Legends",
    "Platforms Available": ["Xbox One", "PS4", "PC", "Switch"]
  },
  {
    "Game Title": "Back 4 Blood",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Borderlands 3",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Brawlhalla",
    "Platforms Available": ["Switch", "Xbox One", "PS4", "PC"]
  },
  {
    "Game Title": "Call of Duty: Black Ops Cold War",
    "Platforms Available": ["PS4", "Xbox One", "PC", "Xbox Series X", "Xbox Series X"]
  },
  {
    "Game Title": "Call of Duty: Modern Warfare",
    "Platforms Available": ["Xbox One", "PS4", "PC"]
  },
  {
    "Game Title": "Call of Duty: Modern Warfare 2",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Call of Duty: Warzone",
    "Platforms Available": ["PS4", "Xbox One", "PC", "Xbox Series X", "PS5"]
  },
  {
    "Game Title": "Call of Duty: Warzone 2",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Call of Duty: Vanguard",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  }
  {
    "Game Title": "Chivalry 2",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Dauntless",
    "Platforms Available": ["PS4", "Xbox One", "PC", "Switch"]
  },
  {
    "Game Title": "Dead by Daylight",
    "Platforms Available": ["Switch", "Xbox One", "PS4", "PC"]
  },
  {
    "Game Title": "Deathloop",
    "Platforms Available": ["PS5", "Xbox Series X/S"]
  },
  {
    "Game Title": "Destiny 2",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Diablo 4",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Evil Dead: The Game",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
  }
  {
    "Game Title": "F1 22",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Fantasy Strike",
    "Platforms Available": ["PS4", "Switch", "Mac", "PC (including Linux)"]
  },
  {
    "Game Title": "Farming Simulator 22",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Final Fantasy XIV: A Realm Reborn",
    "Platforms Available": ["PS4", "PC", "Mac"]
  },
  {
    "Game Title": "Fortnite",
    "Platforms Available": ["PS4", "Xbox One", "Switch", "PC", "mobile", "Xbox Series X", "PS5"]
  },
  {
    "Game Title": "For Honor",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Genshin Impact",
    "Platforms Available": ["PC", "PS4", "Android", "iOS"]
  },
  {
    "Game Title": "Ghostbusters Spirits Unleashed",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  }
  {
    "Game Title": "GRID Legends",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Hood: Outlaws and Legends",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Madden NFL 22",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Matchpoint Tennis Championships",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC", "Switch"]
  },
  {
    "Game Title": "Minecraft",
    "Platforms Available": ["Xbox One", "PS4", "Switch", "PC", "mobile"]
  },
  {
    "Game Title": "Minecraft Dungeons",
    "Platforms Available": ["PC", "Xbox One", "PS4", "Switch"]
  },
  {
    "Game Title": "MLB The Show 21",
    "Platforms Available": ["Xbox Series X", "PS5", "Xbox One", "PS4"]
  },
  {
    "Game Title": "MLB The Show 23",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC", "Switch"]
  }
  {
    "Game Title": "Monster Hunter: Rise",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC", "Switch"]
  },
  {
    "Game Title": "MultiVersus",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Need for Speed: Heat",
    "Platforms Available": ["PS4", "Xbox One", "PC"]
  },
  {
    "Game Title": "Nerf Legends",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "No Man’s Sky",
    "Platforms Available": ["PS4", "Xbox One", "PC"]
  },
  {
    "Game Title": "Overcooked: All you can Eat",
    "Platforms Available": ["PC", "PS4", "PS5", "Switch", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Overwatch 2",
    "Platforms Available": ["PC", "PS4", "PS5", "Switch", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Paladins: Champions of the Realm",
    "Platforms Available": ["Xbox One", "Switch", "PC", "PS4"]
  }
  {
    "Game Title": "PGA Tour 2K23",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Pokemon Unite",
    "Platforms Available": ["Switch", "Mobile"]
  },
  {
    "Game Title": "Power Rangers: Battle for the Grid",
    "Platforms Available": ["Switch", "Xbox One", "PS4", "PC"]
  },
  {
    "Game Title": "Quake",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
  },
  {
    "Game Title": "Rainbow Six Extraction",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Realm Royale",
    "Platforms Available": ["Xbox One", "Switch", "PC", "PS4"]
  },
  {
    "Game Title": "Resident Evil Re:Verse",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Riders Republic",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  }
  {
    "Game Title": "Rocket League",
    "Platforms Available": ["Xbox One", "Switch", "PC", "PS4"]
  },
  {
    "Game Title": "Rogue Company",
    "Platforms Available": ["PS4", "Nintendo Switch", "PC", "Xbox One", "Xbox Series X"]
  },
  {
    "Game Title": "Secret Neighbor",
    "Platforms Available": ["PC", "PS4", "Xbox One", "Switch"]
  },
  {
    "Game Title": "SMITE",
    "Platforms Available": ["Xbox One", "Switch", "PC", "PS4"]
  },
  {
    "Game Title": "Splitgate",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Star Wars: Squadrons",
    "Platforms Available": ["Xbox One", "PS4", "PC"]
  },
  {
    "Game Title": "Street Fighter 6",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
  },
  {
    "Game Title": "Suicide Squad: Kill the Justice League",
    "Platforms Available": ["PS5", "Xbox Series X/S", "PC"]
  }
  {
    "Game Title": "Super Animal Royale",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
  },
  {
    "Game Title": "Super Bomberman R Online",
    "Platforms Available": ["PC", "PS4", "Xbox One", "Switch"]
  },
  {
    "Game Title": "Super Mega Baseball 2",
    "Platforms Available": ["PS4", "Xbox One", "PC", "Switch"]
  },
  {
    "Game Title": "Super Mega Baseball 3",
    "Platforms Available": ["PS4", "Xbox One", "PC", "Switch"]
  },
  {
    "Game Title": "The Ascent",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Them’s Fightin’ Herds",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Tiny Tina’s Wonderlands",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Warframe",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch", "PC"]
  }
  {
    "Game Title": "Wild Hearts",
    "Platforms Available": ["PS5", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Wo Long: Fallen Dynasty",
    "Platforms Available": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
  },
  {
    "Game Title": "Worms: Rumble",
    "Platforms Available": ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
  },
  {
    "Game Title": "World of Warships: Legends",
    "Platforms Available": ["PS4", "Xbox One", "PC"]
  },
  {
    "Game Title": "World War Z",
    "Platforms Available": ["Epic Games Store", "Xbox One", "PC"]
  },
  {
    "Game Title": "WWE 2k: Battlegrounds",
    "Platforms Available": ["PC", "PS4", "Xbox One"]
  }
];

console.log(semiCross);
console.log(fullCross);