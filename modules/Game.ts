import inquirer from "inquirer";
import { Pokemon, pokemon } from "../data/data.js";
import { Gyms } from "./Gyms.js";
import { Items } from "./Items.js";
import { getRandomInt } from "../util/getRandomInt.js";

export class Game {
  party: Pokemon[];
  gyms: Gyms;
  items: Items;
  collections: Pokemon[];

  constructor() {
    this.party = [];
    this.gyms = new Gyms();
    this.items = new Items();
    this.collections = [];
  }

  filterPokemonArr(
    arr: Pokemon[],
    key: keyof Pokemon,
    value: string | number | boolean
  ): Pokemon[] {
    const filteredArr: Pokemon[] = arr.filter(
      (el: Pokemon) => el[key] === value
    );

    return filteredArr;
  }

  async chooseStarter(): Promise<Pokemon[]> {
    const starterArr: Pokemon[] = this.filterPokemonArr(
      pokemon,
      "starter",
      true
    );

    const chosenStarter: Pokemon[] = await inquirer
      .prompt([
        {
          type: "list",
          name: "starterName",
          message: `Choose a starter`,
          choices: [starterArr[0].name, starterArr[1].name, starterArr[2].name],
        },
      ])
      .then((answer) => {
        return this.filterPokemonArr(starterArr, "name", answer.starterName);
      });

    return chosenStarter;
  }

  async addToParty(pokemon: Promise<Pokemon[]> | Pokemon[]) {
    const pokemonToAdd: Pokemon[] = await pokemon;

    if (this.party.length >= 6) {
      this.collections = [...this.collections, ...pokemonToAdd];
      return;
    }

    this.party = [...this.party, ...pokemonToAdd];
  }

  findPokemon(): Pokemon[] {
    const pokemonAbleToFind: Pokemon[] = this.filterPokemonArr(
      pokemon,
      "location",
      this.gyms.getCompletedGyms() + 1
    );

    const foundPokemon: Pokemon[] = [
      pokemonAbleToFind[getRandomInt(0, pokemonAbleToFind.length - 1)],
    ];

    return foundPokemon;
  }

  catchPokemon(foundPokemon: Pokemon[]) {
    let catchRate: number = 0.98;

    if (foundPokemon[0].hp > 150) {
      catchRate = 0.1;
    } else if (foundPokemon[0].hp > 120) {
      catchRate = 0.25;
    } else if (foundPokemon[0].hp > 90) {
      catchRate = 0.5;
    } else if (foundPokemon[0].hp > 75) {
      catchRate = 0.75;
    } else if (foundPokemon[0].hp > 50) {
      catchRate = 0.9;
    }

    const didItCatch = Math.random();

    if (!this.items.getItemQuantity("pokeball")) {
      console.log("You're out of pokeballs!");
      return;
    }

    this.items.updateInventory("pokeball", -1);

    if (didItCatch > catchRate) {
      console.log("Argh...almost had it!");
      // Insert HP Damage here
      return;
    }

    this.addToParty(foundPokemon);
  }
}
