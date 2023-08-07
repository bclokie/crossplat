const mongoose = require('mongoose');

const semiCrossModel = mongoose.model('SemiCross', {
  title: String,
  platformsWithCrossplay: [String],
  platformsWithoutCrossplay: [String],
});

const semiCross = [
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

module.exports = { semiCrossModel, semiCross };