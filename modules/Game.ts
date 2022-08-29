import chalk from "chalk";
import { Pokemon, pokemon } from "../data/data.js";
import { Gym, Gyms } from "./Gyms.js";
import { Items } from "./Items.js";
import { getRandomInt } from "../util/getRandomInt.js";

export class Game {
  party: Pokemon[];
  gyms: Gyms;
  items: Items;
  collections: Pokemon[];
  playerName: string;
  rivalName: string;

  constructor() {
    this.party = [];
    this.gyms = new Gyms();
    this.items = new Items();
    this.collections = [];
    this.playerName = "";
    this.rivalName = "";
  }

  printPokemon(arr: Pokemon[]) {
    const colorCodes: string[] = [
      "#A8A77A",
      "#EE8130",
      "#6390F0",
      "#F7D02C",
      "#7AC74C",
      "#96D9D6",
      "#C22E28",
      "#A33EA1",
      "#E2BF65",
      "#F95587",
      "#A6B91A",
      "#B6A136",
      "#735797",
      "#6F35FC",
      "#D685AD",
    ];

    const type: string[] = [
      "normal",
      "fire",
      "water",
      "electric",
      "grass",
      "ice",
      "fighting",
      "poiosn",
      "ground",
      "psychic",
      "bug",
      "rock",
      "ghost",
      "dragon",
      "fairy",
    ];

    arr.forEach((poke: Pokemon) => {
      const colorCode: string = colorCodes[type.indexOf(poke.type)];
      let hpColor: string;

      const temp: Pokemon = this.filterPokemonArr(
        pokemon,
        "name",
        poke.name
      )[0];

      if (poke.hp > temp.hp / 2) {
        hpColor = "#00FF00";
      } else if (poke.hp > temp.hp / 4) {
        hpColor = "#FFFF00";
      } else {
        hpColor = "#FF0000";
      }

      console.log(chalk.bgHex(colorCode)(poke.name));
      console.log(`${chalk.bold("HP")}: ${chalk.hex(hpColor)(poke.hp)}`);
      console.log(`Type: ${chalk.hex(colorCode)(poke.type)}`);
      console.log(`Can Evolve: ${poke.canEvolve}\n`);
    });
  }

  setPlayerName(value: string = "Red") {
    this.playerName = value || "Red";
  }

  setRivalName(value: string = "Blue") {
    this.rivalName = value || "Blue";
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

  chooseStarter(): Pokemon[] {
    return this.filterPokemonArr(pokemon, "starter", true);
  }

  addToParty(pokemon: Pokemon[] | Pokemon[]) {
    if (this.party.length >= 6) {
      this.collections.push(JSON.parse(JSON.stringify(pokemon[0])));

      return;
    }

    this.party.push(JSON.parse(JSON.stringify(pokemon[0])));
  }

  sortPartyByHp() {
    this.party.sort((a: Pokemon, b: Pokemon) => (a.hp <= b.hp ? 1 : -1));
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

  catchPokemon(foundPokemon: Pokemon[]): boolean {
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
      console.log(chalk.bgRed("You're out of pokeballs!"));
      return false;
    }

    this.items.updateInventory("pokeball", -1);

    if (didItCatch > catchRate) {
      console.log(chalk.bgYellow("Argh...almost had it!"));
      this.hurtPokemon(this.party, 10);
      return false;
    }

    return true;
  }

  isPokemonInjured(name: string): boolean {
    const inParty: Pokemon = this.filterPokemonArr(this.party, "name", name)[0];
    const original: Pokemon = this.filterPokemonArr(pokemon, "name", name)[0];

    return inParty.hp < original.hp;
  }

  healPokemon(name: string) {
    const inParty: Pokemon = this.filterPokemonArr(this.party, "name", name)[0];
    const original: Pokemon = this.filterPokemonArr(pokemon, "name", name)[0];

    inParty.hp > 0 ? (inParty.hp = original.hp) : "Can't heal a dead Pokemon.";
  }

  hurtPokemon(poke: Pokemon[], value: number) {
    value <= poke[0].hp ? (poke[0].hp -= value) : (poke[0].hp = 0);
  }

  swapEvolvedPokemon(preEvo: Pokemon, postEvo: Pokemon) {
    let index: number = -1;

    this.party.forEach((poke: Pokemon, i: number) =>
      preEvo.name === poke.name ? (index = i) : null
    );

    this.party.splice(index, 1, postEvo);
  }

  evolvePokemon(name: string): boolean {
    const poke: Pokemon = this.filterPokemonArr(this.party, "name", name)[0];

    if (!poke.canEvolve) {
      return false;
    }

    let evolution: Pokemon[] = this.filterPokemonArr(
      pokemon,
      "number",
      poke.number + 1
    );

    //Funky
    evolution = [...evolution];

    this.swapEvolvedPokemon(poke, evolution[0]);

    return true;
  }

  beatGym(gym: Gym) {
    this.hurtPokemon(this.party, gym.difficulty * 20);
    if (!this.checkIfUsablePokemon) {
      return;
    }
    this.gyms.beatGym(gym);
    this.items.updateInventory("pokeball", gym.difficulty);
    this.items.updateInventory("potion", gym.difficulty);
    this.items.updateInventory("rare candy", gym.difficulty);
  }

  checkIfUsablePokemon(): boolean {
    let count: number = 0;

    this.party.forEach((poke: Pokemon) =>
      poke.hp === 0 ? (count += 1) : null
    );

    if (count === this.party.length) {
      console.log(
        `${this.playerName} is out of useable Pokemon!\n${this.playerName} blacked out!\Unfortunately, there are no Pokemon Centers in this game, so it's game over for you!`
      );
      return false;
    } else {
      console.log("Sorting Pokemon by HP");
      this.sortPartyByHp;
      return true;
    }
  }

  swapFromCollections(pokeColl: string, pokeParty: string) {
    const pokeInColl: Pokemon[] = this.filterPokemonArr(
      this.collections,
      "name",
      pokeColl
    );
    const pokeInParty: Pokemon[] = this.filterPokemonArr(
      this.party,
      "name",
      pokeParty
    );

    let collIndex: number = -1;
    let partyIndex: number = -1;

    this.collections.forEach((poke: Pokemon, i: number) =>
      poke.name === pokeInColl[0].name ? (collIndex = i) : null
    );

    this.party.forEach((poke: Pokemon, i: number) =>
      poke.name === pokeInParty[0].name ? (partyIndex = i) : null
    );

    this.party.splice(partyIndex, 1, pokeInColl[0]);
    this.collections.splice(collIndex, 1, pokeInParty[0]);

    console.log(partyIndex);
    console.log(collIndex);

    console.log(`Your Pokemon have been swapped!`);
  }
}
