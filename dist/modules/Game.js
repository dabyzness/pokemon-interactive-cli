import inquirer from "inquirer";
import { pokemon } from "../data/data.js";
import { Gyms } from "./Gyms.js";
import { Items } from "./Items.js";
import { getRandomInt } from "../util/getRandomInt.js";
export class Game {
    constructor(playerName, rivalName) {
        this.party = [];
        this.gyms = new Gyms();
        this.items = new Items();
        this.collections = [];
        this.playerName = playerName;
        this.rivalName = rivalName;
        this.addToParty(this.chooseStarter());
        console.log(this.party);
    }
    filterPokemonArr(arr, key, value) {
        const filteredArr = arr.filter((el) => el[key] === value);
        return filteredArr;
    }
    async chooseStarter() {
        const starterArr = this.filterPokemonArr(pokemon, "starter", true);
        const chosenStarter = await inquirer
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
    async addToParty(pokemon) {
        const pokemonToAdd = await pokemon;
        if (this.party.length >= 6) {
            this.collections = [...this.collections, ...pokemonToAdd];
            return;
        }
        this.party = [...this.party, ...pokemonToAdd];
    }
    findPokemon() {
        const pokemonAbleToFind = this.filterPokemonArr(pokemon, "location", this.gyms.getCompletedGyms() + 1);
        const foundPokemon = [
            pokemonAbleToFind[getRandomInt(0, pokemonAbleToFind.length - 1)],
        ];
        return foundPokemon;
    }
    catchPokemon(foundPokemon) {
        let catchRate = 0.98;
        if (foundPokemon[0].hp > 150) {
            catchRate = 0.1;
        }
        else if (foundPokemon[0].hp > 120) {
            catchRate = 0.25;
        }
        else if (foundPokemon[0].hp > 90) {
            catchRate = 0.5;
        }
        else if (foundPokemon[0].hp > 75) {
            catchRate = 0.75;
        }
        else if (foundPokemon[0].hp > 50) {
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
            return;
        }
        this.addToParty(foundPokemon);
    }
}
//# sourceMappingURL=Game.js.map