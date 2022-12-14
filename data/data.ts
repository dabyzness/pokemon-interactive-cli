// ! Feel free to explore this file, but do not modify anything here!

export interface Pokemon {
  readonly number: number;
  readonly name: string;
  readonly type: string;
  hp: number;
  readonly starter: boolean;
  readonly canEvolve: boolean;
  readonly location?: number;
}

export const pokemon: Array<Pokemon> = [
  {
    number: 1,
    name: "Bulbasaur",
    type: "grass",
    hp: 45,
    starter: true,
    canEvolve: true,
  },
  {
    number: 2,
    name: "Ivysaur",
    type: "grass",
    hp: 60,
    starter: false,
    canEvolve: true,
  },
  {
    number: 3,
    name: "Venusaur",
    type: "grass",
    hp: 80,
    starter: false,
    canEvolve: false,
  },
  {
    number: 4,
    name: "Charmander",
    type: "fire",
    hp: 39,
    starter: true,
    canEvolve: true,
  },
  {
    number: 5,
    name: "Charmeleon",
    type: "fire",
    hp: 58,
    starter: false,
    canEvolve: true,
  },
  {
    number: 6,
    name: "Charizard",
    type: "fire",
    hp: 78,
    starter: false,
    canEvolve: false,
  },
  {
    number: 7,
    name: "Squirtle",
    type: "water",
    hp: 44,
    starter: true,
    canEvolve: true,
  },
  {
    number: 8,
    name: "Wartortle",
    type: "water",
    hp: 59,
    starter: false,
    canEvolve: true,
  },
  {
    number: 9,
    name: "Blastoise",
    type: "water",
    hp: 79,
    starter: false,
    canEvolve: false,
  },
  {
    number: 10,
    name: "Caterpie",
    type: "bug",
    hp: 45,
    starter: false,
    canEvolve: true,
    location: 1,
  },
  {
    number: 11,
    name: "Metapod",
    type: "bug",
    hp: 50,
    starter: false,
    canEvolve: true,
    location: 1,
  },
  {
    number: 13,
    name: "Weedle",
    type: "bug",
    hp: 40,
    starter: false,
    canEvolve: true,
    location: 1,
  },
  {
    number: 12,
    name: "Butterfree",
    type: "bug",
    hp: 60,
    starter: false,
    canEvolve: false,
  },
  {
    number: 14,
    name: "Kakuna",
    type: "bug",
    hp: 45,
    starter: false,
    canEvolve: true,
    location: 1,
  },
  {
    number: 15,
    name: "Beedrill",
    type: "bug",
    hp: 65,
    starter: false,
    canEvolve: false,
  },
  {
    number: 16,
    name: "Pidgey",
    type: "normal",
    hp: 40,
    starter: false,
    canEvolve: true,
    location: 1,
  },
  {
    number: 17,
    name: "Pidgeotto",
    type: "normal",
    hp: 63,
    starter: false,
    canEvolve: true,
  },
  {
    number: 18,
    name: "Pidgeot",
    type: "normal",
    hp: 83,
    starter: false,
    canEvolve: false,
  },
  {
    number: 19,
    name: "Rattata",
    type: "normal",
    hp: 30,
    starter: false,
    canEvolve: true,
    location: 1,
  },
  {
    number: 20,
    name: "Raticate",
    type: "normal",
    hp: 55,
    starter: false,
    canEvolve: false,
  },
  {
    number: 21,
    name: "Spearow",
    type: "normal",
    hp: 40,
    starter: false,
    canEvolve: true,
    location: 1,
  },
  {
    number: 22,
    name: "Fearow",
    type: "normal",
    hp: 65,
    starter: false,
    canEvolve: false,
    location: 5,
  },
  {
    number: 23,
    name: "Ekans",
    type: "poison",
    hp: 35,
    starter: false,
    canEvolve: true,
    location: 3,
  },
  {
    number: 24,
    name: "Arbok",
    type: "poison",
    hp: 60,
    starter: false,
    canEvolve: false,
  },
  {
    number: 25,
    name: "Pikachu",
    type: "electric",
    hp: 35,
    starter: false,
    canEvolve: true,
    location: 1,
  },
  {
    number: 26,
    name: "Raichu",
    type: "electric",
    hp: 60,
    starter: false,
    canEvolve: false,
  },
  {
    number: 27,
    name: "Sandshrew",
    type: "ground",
    hp: 50,
    starter: false,
    canEvolve: true,
  },
  {
    number: 28,
    name: "Sandslash",
    type: "ground",
    hp: 75,
    starter: false,
    canEvolve: false,
  },
  {
    number: 29,
    name: "Nidoran???",
    type: "poison",
    hp: 55,
    starter: false,
    canEvolve: true,
  },
  {
    number: 30,
    name: "Nidorina",
    type: "poison",
    hp: 70,
    starter: false,
    canEvolve: true,
    location: 5,
  },
  {
    number: 31,
    name: "Nidoqueen",
    type: "poison",
    hp: 90,
    starter: false,
    canEvolve: false,
  },
  {
    number: 32,
    name: "Nidoran???",
    type: "poison",
    hp: 46,
    starter: false,
    canEvolve: true,
    location: 5,
  },
  {
    number: 33,
    name: "Nidorino",
    type: "poison",
    hp: 61,
    starter: false,
    canEvolve: true,
    location: 5,
  },
  {
    number: 34,
    name: "Nidoking",
    type: "poison",
    hp: 81,
    starter: false,
    canEvolve: false,
  },
  {
    number: 35,
    name: "Clefairy",
    type: "fairy",
    hp: 70,
    starter: false,
    canEvolve: true,
    location: 2,
  },
  {
    number: 36,
    name: "Clefable",
    type: "fairy",
    hp: 95,
    starter: false,
    canEvolve: false,
  },
  {
    number: 37,
    name: "Vulpix",
    type: "fire",
    hp: 38,
    starter: false,
    canEvolve: true,
  },
  {
    number: 38,
    name: "Ninetales",
    type: "fire",
    hp: 73,
    starter: false,
    canEvolve: false,
  },
  {
    number: 39,
    name: "Jigglypuff",
    type: "normal",
    hp: 115,
    starter: false,
    canEvolve: true,
    location: 3,
  },
  {
    number: 40,
    name: "Wigglytuff",
    type: "normal",
    hp: 140,
    starter: false,
    canEvolve: false,
  },
  {
    number: 41,
    name: "Zubat",
    type: "poison",
    hp: 40,
    starter: false,
    canEvolve: true,
    location: 2,
  },
  {
    number: 42,
    name: "Golbat",
    type: "poison",
    hp: 75,
    starter: false,
    canEvolve: false,
    location: 7,
  },
  {
    number: 46,
    name: "Paras",
    type: "bug",
    hp: 35,
    starter: false,
    canEvolve: true,
    location: 2,
  },
  {
    number: 47,
    name: "Parasect",
    type: "bug",
    hp: 60,
    starter: false,
    canEvolve: false,
    location: 5,
  },
  {
    number: 48,
    name: "Venonat",
    type: "bug",
    hp: 60,
    starter: false,
    canEvolve: true,
    location: 2,
  },
  {
    number: 45,
    name: "Vileplume",
    type: "grass",
    hp: 75,
    starter: false,
    canEvolve: false,
  },
  {
    number: 51,
    name: "Dugtrio",
    type: "ground",
    hp: 35,
    starter: false,
    canEvolve: false,
    location: 3,
  },
  {
    number: 50,
    name: "Diglett",
    type: "ground",
    hp: 10,
    starter: false,
    canEvolve: true,
    location: 3,
  },
  {
    number: 52,
    name: "Meowth",
    type: "normal",
    hp: 40,
    starter: false,
    canEvolve: true,
    location: 3,
  },
  {
    number: 53,
    name: "Persian",
    type: "normal",
    hp: 65,
    starter: false,
    canEvolve: false,
  },
  {
    number: 54,
    name: "Psyduck",
    type: "water",
    hp: 50,
    starter: false,
    canEvolve: true,
    location: 2,
  },
  {
    number: 55,
    name: "Golduck",
    type: "water",
    hp: 80,
    starter: false,
    canEvolve: false,
    location: 7,
  },
  {
    number: 56,
    name: "Mankey",
    type: "fighting",
    hp: 40,
    starter: false,
    canEvolve: true,
    location: 3,
  },
  {
    number: 57,
    name: "Primeape",
    type: "fighting",
    hp: 65,
    starter: false,
    canEvolve: false,
  },
  {
    number: 44,
    name: "Gloom",
    type: "grass",
    hp: 60,
    starter: false,
    canEvolve: true,
    location: 6,
  },
  {
    number: 58,
    name: "Growlithe",
    type: "fire",
    hp: 55,
    starter: false,
    canEvolve: true,
    location: 4,
  },
  {
    number: 59,
    name: "Arcanine",
    type: "fire",
    hp: 90,
    starter: false,
    canEvolve: false,
  },
  {
    number: 60,
    name: "Poliwag",
    type: "water",
    hp: 40,
    starter: false,
    canEvolve: true,
    location: 5,
  },
  {
    number: 62,
    name: "Poliwrath",
    type: "water",
    hp: 90,
    starter: false,
    canEvolve: false,
  },
  {
    number: 61,
    name: "Poliwhirl",
    type: "water",
    hp: 65,
    starter: false,
    canEvolve: true,
  },
  {
    number: 63,
    name: "Abra",
    type: "psychic",
    hp: 25,
    starter: false,
    canEvolve: true,
    location: 2,
  },
  {
    number: 64,
    name: "Kadabra",
    type: "psychic",
    hp: 40,
    starter: false,
    canEvolve: true,
  },
  {
    number: 65,
    name: "Alakazam",
    type: "psychic",
    hp: 55,
    starter: false,
    canEvolve: false,
  },
  {
    number: 66,
    name: "Machop",
    type: "fighting",
    hp: 70,
    starter: false,
    canEvolve: true,
    location: 4,
  },
  {
    number: 68,
    name: "Machamp",
    type: "fighting",
    hp: 90,
    starter: false,
    canEvolve: false,
  },
  {
    number: 67,
    name: "Machoke",
    type: "fighting",
    hp: 80,
    starter: false,
    canEvolve: true,
  },
  {
    number: 69,
    name: "Bellsprout",
    type: "grass",
    hp: 50,
    starter: false,
    canEvolve: true,
    location: 2,
  },
  {
    number: 70,
    name: "Weepinbell",
    type: "grass",
    hp: 65,
    starter: false,
    canEvolve: true,
  },
  {
    number: 71,
    name: "Victreebel",
    type: "grass",
    hp: 80,
    starter: false,
    canEvolve: false,
  },
  {
    number: 73,
    name: "Tentacruel",
    type: "water",
    hp: 80,
    starter: false,
    canEvolve: false,
  },
  {
    number: 72,
    name: "Tentacool",
    type: "water",
    hp: 40,
    starter: false,
    canEvolve: true,
    location: 7,
  },
  {
    number: 74,
    name: "Geodude",
    type: "rock",
    hp: 40,
    starter: false,
    canEvolve: true,
    location: 2,
  },
  {
    number: 76,
    name: "Golem",
    type: "rock",
    hp: 80,
    starter: false,
    canEvolve: false,
  },
  {
    number: 77,
    name: "Ponyta",
    type: "fire",
    hp: 50,
    starter: false,
    canEvolve: true,
    location: 7,
  },
  {
    number: 78,
    name: "Rapidash",
    type: "fire",
    hp: 65,
    starter: false,
    canEvolve: false,
  },
  {
    number: 75,
    name: "Graveler",
    type: "rock",
    hp: 55,
    starter: false,
    canEvolve: true,
  },
  {
    number: 79,
    name: "Slowpoke",
    type: "water",
    hp: 90,
    starter: false,
    canEvolve: true,
    location: 7,
  },
  {
    number: 81,
    name: "Magnemite",
    type: "electric",
    hp: 25,
    starter: false,
    canEvolve: true,
  },
  {
    number: 80,
    name: "Slowbro",
    type: "water",
    hp: 95,
    starter: false,
    canEvolve: false,
    location: 7,
  },
  {
    number: 82,
    name: "Magneton",
    type: "electric",
    hp: 50,
    starter: false,
    canEvolve: false,
  },
  {
    number: 84,
    name: "Doduo",
    type: "normal",
    hp: 35,
    starter: false,
    canEvolve: true,
    location: 5,
  },
  {
    number: 83,
    name: "Farfetch'd",
    type: "normal",
    hp: 52,
    starter: false,
    canEvolve: false,
  },
  {
    number: 86,
    name: "Seel",
    type: "water",
    hp: 65,
    starter: false,
    canEvolve: true,
    location: 7,
  },
  {
    number: 85,
    name: "Dodrio",
    type: "normal",
    hp: 60,
    starter: false,
    canEvolve: false,
  },
  {
    number: 88,
    name: "Grimer",
    type: "poison",
    hp: 80,
    starter: false,
    canEvolve: true,
    location: 7,
  },
  {
    number: 87,
    name: "Dewgong",
    type: "water",
    hp: 90,
    starter: false,
    canEvolve: false,
    location: 7,
  },
  {
    number: 89,
    name: "Muk",
    type: "poison",
    hp: 105,
    starter: false,
    canEvolve: false,
    location: 7,
  },
  {
    number: 90,
    name: "Shellder",
    type: "water",
    hp: 30,
    starter: false,
    canEvolve: true,
    location: 7,
  },
  {
    number: 43,
    name: "Oddish",
    type: "grass",
    hp: 45,
    starter: false,
    canEvolve: true,
    location: 2,
  },
  {
    number: 91,
    name: "Cloyster",
    type: "water",
    hp: 50,
    starter: false,
    canEvolve: false,
  },
  {
    number: 92,
    name: "Gastly",
    type: "ghost",
    hp: 30,
    starter: false,
    canEvolve: true,
    location: 4,
  },
  {
    number: 93,
    name: "Haunter",
    type: "ghost",
    hp: 45,
    starter: false,
    canEvolve: true,
    location: 4,
  },
  {
    number: 94,
    name: "Gengar",
    type: "ghost",
    hp: 60,
    starter: false,
    canEvolve: false,
  },
  {
    number: 95,
    name: "Onix",
    type: "rock",
    hp: 35,
    starter: false,
    canEvolve: false,
    location: 4,
  },
  {
    number: 97,
    name: "Hypno",
    type: "psychic",
    hp: 85,
    starter: false,
    canEvolve: false,
  },
  {
    number: 99,
    name: "Kingler",
    type: "water",
    hp: 55,
    starter: false,
    canEvolve: false,
  },
  {
    number: 98,
    name: "Krabby",
    type: "water",
    hp: 30,
    starter: false,
    canEvolve: true,
  },
  {
    number: 101,
    name: "Electrode",
    type: "electric",
    hp: 40,
    starter: false,
    canEvolve: false,
  },
  {
    number: 100,
    name: "Voltorb",
    type: "electric",
    hp: 40,
    starter: false,
    canEvolve: true,
    location: 4,
  },
  {
    number: 96,
    name: "Drowzee",
    type: "psychic",
    hp: 60,
    starter: false,
    canEvolve: true,
    location: 3,
  },
  {
    number: 103,
    name: "Exeggutor",
    type: "grass",
    hp: 95,
    starter: false,
    canEvolve: false,
  },
  {
    number: 102,
    name: "Exeggcute",
    type: "grass",
    hp: 60,
    starter: false,
    canEvolve: true,
    location: 5,
  },
  {
    number: 104,
    name: "Cubone",
    type: "ground",
    hp: 50,
    starter: false,
    canEvolve: true,
    location: 4,
  },
  {
    number: 105,
    name: "Marowak",
    type: "ground",
    hp: 60,
    starter: false,
    canEvolve: false,
  },
  {
    number: 49,
    name: "Venomoth",
    type: "bug",
    hp: 70,
    starter: false,
    canEvolve: false,
    location: 5,
  },
  {
    number: 110,
    name: "Weezing",
    type: "poison",
    hp: 65,
    starter: false,
    canEvolve: false,
    location: 7,
  },
  {
    number: 108,
    name: "Lickitung",
    type: "normal",
    hp: 90,
    starter: false,
    canEvolve: false,
  },
  {
    number: 111,
    name: "Rhyhorn",
    type: "ground",
    hp: 80,
    starter: false,
    canEvolve: true,
    location: 5,
  },
  {
    number: 112,
    name: "Rhydon",
    type: "ground",
    hp: 105,
    starter: false,
    canEvolve: false,
  },
  {
    number: 113,
    name: "Chansey",
    type: "normal",
    hp: 250,
    starter: false,
    canEvolve: false,
    location: 5,
  },
  {
    number: 114,
    name: "Tangela",
    type: "grass",
    hp: 65,
    starter: false,
    canEvolve: false,
    location: 7,
  },
  {
    number: 115,
    name: "Kangaskhan",
    type: "normal",
    hp: 105,
    starter: false,
    canEvolve: false,
    location: 5,
  },
  {
    number: 116,
    name: "Horsea",
    type: "water",
    hp: 30,
    starter: false,
    canEvolve: true,
    location: 7,
  },
  {
    number: 117,
    name: "Seadra",
    type: "water",
    hp: 55,
    starter: false,
    canEvolve: false,
    location: 7,
  },
  {
    number: 118,
    name: "Goldeen",
    type: "water",
    hp: 45,
    starter: false,
    canEvolve: true,
    location: 5,
  },
  {
    number: 119,
    name: "Seaking",
    type: "water",
    hp: 80,
    starter: false,
    canEvolve: false,
  },
  {
    number: 120,
    name: "Staryu",
    type: "water",
    hp: 30,
    starter: false,
    canEvolve: true,
    location: 7,
  },
  {
    number: 121,
    name: "Starmie",
    type: "water",
    hp: 60,
    starter: false,
    canEvolve: false,
  },
  {
    number: 122,
    name: "Mr. Mime",
    type: "psychic",
    hp: 40,
    starter: false,
    canEvolve: false,
  },
  {
    number: 106,
    name: "Hitmonlee",
    type: "fighting",
    hp: 50,
    starter: false,
    canEvolve: false,
    location: 6,
  },
  {
    number: 123,
    name: "Scyther",
    type: "bug",
    hp: 70,
    starter: false,
    canEvolve: false,
    location: 5,
  },
  {
    number: 124,
    name: "Jynx",
    type: "ice",
    hp: 65,
    starter: false,
    canEvolve: false,
  },
  {
    number: 125,
    name: "Electabuzz",
    type: "electric",
    hp: 65,
    starter: false,
    canEvolve: false,
  },
  {
    number: 126,
    name: "Magmar",
    type: "fire",
    hp: 65,
    starter: false,
    canEvolve: false,
  },
  {
    number: 127,
    name: "Pinsir",
    type: "bug",
    hp: 65,
    starter: false,
    canEvolve: false,
  },
  {
    number: 128,
    name: "Tauros",
    type: "normal",
    hp: 75,
    starter: false,
    canEvolve: false,
    location: 5,
  },
  {
    number: 130,
    name: "Gyarados",
    type: "water",
    hp: 95,
    starter: false,
    canEvolve: false,
  },
  {
    number: 129,
    name: "Magikarp",
    type: "water",
    hp: 20,
    starter: false,
    canEvolve: true,
    location: 3,
  },
  {
    number: 132,
    name: "Ditto",
    type: "normal",
    hp: 48,
    starter: false,
    canEvolve: false,
    location: 6,
  },
  {
    number: 131,
    name: "Lapras",
    type: "water",
    hp: 130,
    starter: false,
    canEvolve: false,
  },
  {
    number: 133,
    name: "Eevee",
    type: "normal",
    hp: 55,
    starter: false,
    canEvolve: true,
  },
  {
    number: 134,
    name: "Vaporeon",
    type: "water",
    hp: 65,
    starter: false,
    canEvolve: false,
  },
  {
    number: 135,
    name: "Jolteon",
    type: "electric",
    hp: 130,
    starter: false,
    canEvolve: false,
  },
  {
    number: 136,
    name: "Flareon",
    type: "fire",
    hp: 65,
    starter: false,
    canEvolve: false,
  },
  {
    number: 137,
    name: "Porygon",
    type: "normal",
    hp: 65,
    starter: false,
    canEvolve: false,
  },
  {
    number: 138,
    name: "Omanyte",
    type: "rock",
    hp: 35,
    starter: false,
    canEvolve: true,
    location: 7,
  },
  {
    number: 139,
    name: "Omastar",
    type: "rock",
    hp: 70,
    starter: false,
    canEvolve: false,
  },
  {
    number: 141,
    name: "Kabutops",
    type: "rock",
    hp: 60,
    starter: false,
    canEvolve: false,
  },
  {
    number: 142,
    name: "Aerodactyl",
    type: "rock",
    hp: 80,
    starter: false,
    canEvolve: false,
    location: 7,
  },
  {
    number: 140,
    name: "Kabuto",
    type: "rock",
    hp: 30,
    starter: false,
    canEvolve: true,
    location: 7,
  },
  {
    number: 143,
    name: "Snorlax",
    type: "normal",
    hp: 160,
    starter: false,
    canEvolve: false,
    location: 5,
  },
  {
    number: 144,
    name: "Articuno",
    type: "ice",
    hp: 90,
    starter: false,
    canEvolve: false,
    location: 8,
  },
  {
    number: 145,
    name: "Zapdos",
    type: "electric",
    hp: 90,
    starter: false,
    canEvolve: false,
    location: 8,
  },
  {
    number: 146,
    name: "Moltres",
    type: "fire",
    hp: 90,
    starter: false,
    canEvolve: false,
  },
  {
    number: 147,
    name: "Dratini",
    type: "dragon",
    hp: 41,
    starter: false,
    canEvolve: true,
    location: 6,
  },
  {
    number: 148,
    name: "Dragonair",
    type: "dragon",
    hp: 61,
    starter: false,
    canEvolve: true,
  },
  {
    number: 149,
    name: "Dragonite",
    type: "dragon",
    hp: 91,
    starter: false,
    canEvolve: false,
  },
  {
    number: 150,
    name: "Mewtwo",
    type: "psychic",
    hp: 106,
    starter: false,
    canEvolve: false,
  },
  {
    number: 151,
    name: "Mew",
    type: "psychic",
    hp: 100,
    starter: false,
    canEvolve: false,
  },
  {
    number: 109,
    name: "Koffing",
    type: "poison",
    hp: 40,
    starter: false,
    canEvolve: true,
    location: 7,
  },
  {
    number: 107,
    name: "Hitmonchan",
    type: "fighting",
    hp: 50,
    starter: false,
    canEvolve: false,
    location: 6,
  },
];
