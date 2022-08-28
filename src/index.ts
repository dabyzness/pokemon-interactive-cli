import inquirer from "inquirer";
import chalk from "chalk";
import { Pokemon } from "../data/data.js";
import { Gym } from "modules/Gyms.js";
import { Item } from "modules/Items.js";
import { Game } from "../modules/Game.js";

let game: Game = new Game();

const initializePlayerName = (): Promise<void> => {
  console.clear();
  return inquirer
    .prompt([
      {
        type: "input",
        name: "playerName",
        message:
          "Hello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights. Myself… I study Pokémon as a profession. First, what is your name?\n",
      },
    ])
    .then((answer: { playerName: string }) => {
      game.setPlayerName(answer.playerName);
      console.log(`Right! So your name is ${chalk.bgRed(game.playerName)}!`);
    });
};

const initializeRivalName = (): Promise<void> => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "rivalName",
        message: `This is my grandson. He's been your rival since you were a baby. …Erm, what is his name again?\n`,
      },
    ])
    .then((answer: { rivalName: string }) => {
      game.setRivalName(answer.rivalName);
      console.log(
        `That's right! I remember now! His name is ${chalk.bgBlue(
          game.rivalName
        )}!\n${chalk.bgRed(
          game.playerName
        )}! Your very own Pokémon legend is about to unfold! A world of dreams and adventures with Pokémon awaits! Let's go!`
      );
    });
};

const pickStarter = (): Promise<void> => {
  const starterArr: Pokemon[] = game.chooseStarter();

  console.log(
    "The next day...\nYou're taking a leisurely stroll through Pallet Town when suddenly you hear a familiar voice screaming behind you."
  );

  console.log(
    chalk.bgWhite(
      "Hey! Wait! Don't go out! It's unsafe! Wild Pokémon live in tall grass! You need your own Pokémon for your protection. I know! Here, come with me!"
    )
  );

  return inquirer
    .prompt([
      {
        type: "list",
        name: "starter",
        message: "Choose a starter:\n",
        choices: [starterArr[0].name, starterArr[1].name, starterArr[2].name],
      },
    ])
    .then((answer: { starter: string }) => {
      game.addToParty(
        game.filterPokemonArr(starterArr, "name", answer.starter)
      );
      console.clear();
    });
};

const menu = (): Promise<void> | void => {
  const currentGym: Gym = game.gyms.getCurrentGym();

  if (!currentGym) {
    console.log(
      `You've completed all 8 gyms!\n Unfortunately 10 year olds aren't allowed to compete in the Elite Four, so your game ends here, ${chalk.bgRed(
        game.playerName
      )}`
    );
    return;
  }

  return inquirer
    .prompt([
      {
        type: "list",
        name: "chooseMenuOption",
        message: "Choose an option:\n",
        choices: [
          "View Party",
          "Sort Party",
          "Use Items",
          "View Collections",
          "Catch Pokemon",
          `Challenge ${currentGym.location} Gym`,
        ],
      },
    ])
    .then((answer: { chooseMenuOption: string }) => {
      console.clear();
      switch (answer.chooseMenuOption) {
        case "View Party":
          game.printPokemon(game.party);
          menu();
          break;
        case "Sort Party":
          game.sortParty();
          menu();
          break;
        case "Use Items":
          game.items.printItems();
          useItem();
          break;
        case "View Collections":
          game.printPokemon(game.collections);
          menu();
          break;
        case "Catch Pokemon":
          const foundPokemon: Pokemon[] = game.findPokemon();
          catchPokemon(foundPokemon);
          break;
        case `Challenge ${currentGym.location} Gym`:
          console.log(
            chalk.bgWhite(`You've beaten the ${currentGym.location} gym!`)
          );
          game.gyms.beatGym(currentGym);
          menu();
          break;
      }
    });
};

const catchPokemon = (foundPokemon: Pokemon[]): Promise<void> => {
  game.printPokemon(foundPokemon);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "chooseCatchOption",
        choices: ["Throw Ball", "Run"],
      },
    ])
    .then((answer: { chooseCatchOption: string }) => {
      if (answer.chooseCatchOption === "Throw Ball") {
        const isCaught: boolean = game.catchPokemon(foundPokemon);
        if (!isCaught) {
          console.clear();
          catchPokemon(foundPokemon);
        } else {
          console.clear();
          console.log(chalk.bgWhite(`You caught a ${foundPokemon[0].name}!`));
          game.addToParty(foundPokemon);
          menu();
        }
      } else {
        console.log(chalk.bgWhite("You ran away from the Pokemon."));
        menu();
      }
    });
};

const useItem = (): Promise<void> => {
  const items: string[] = [];
  game.items
    .getItems()
    .forEach((item: Item) =>
      item.quantity > 0 ? items.push(item.name) : null
    );

  const partyPokemon: string[] = [];
  game.party.forEach((poke: Pokemon) => partyPokemon.push(poke.name));

  return inquirer
    .prompt([
      {
        type: "list",
        name: "chooseItemOption",
        message: "Choose an Item to use:",
        choices: items,
      },
      {
        type: "list",
        name: "onWhichPokemon",
        message: "Use on which Pokemon?",
        choices: partyPokemon,
      },
    ])
    .then((answer: { chooseItemOption: string; onWhichPokemon: string }) => {
      switch (answer.chooseItemOption) {
        case "pokeball":
          console.log(
            `${chalk.bgRed(game.playerName)}! This isn't the time to use that!`
          );
          menu();
          break;
        case "potion":
          game.items.updateInventory("potion", -1);
          if (game.isPokemonInjured(answer.onWhichPokemon)) {
            game.healPokemon(answer.onWhichPokemon);
            console.log(`${answer.onWhichPokemon} has been fully healed!`);
          } else {
            console.log(`Item had no effect on ${answer.onWhichPokemon}`);
          }
          menu();
          break;
        case "rare candy":
          const didItEvolve = game.evolvePokemon(answer.onWhichPokemon);
          if (didItEvolve) {
            game.items.updateInventory(answer.chooseItemOption, -1);
            console.log(`You're ${answer.onWhichPokemon} has evolved!`);
          } else {
            console.log(`This pokemon can't evolve past its current stage.`);
          }
          menu();
          break;
      }
    });
};

initializePlayerName().then(initializeRivalName).then(pickStarter).then(menu);
