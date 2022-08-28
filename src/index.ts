import inquirer from "inquirer";
import Rx from "rxjs";
// import { Game } from "../modules/Game.js";

// const game: Game = new Game();
const prompts = new Rx.Subject();

// inquirer.prompt(prompts);

inquirer
  .prompt([
    {
      type: "input",
      name: "playerName",
      message:
        "Hello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights. Myself… I study Pokémon as a profession. First, what is your name?\n",
    },
  ])
  .then((answers) =>
    console.log(`Right! So your name is ${answers.playerName}!`)
  );

prompts.next(
  inquirer
    .prompt([
      {
        type: "input",
        name: "playerName",
        message:
          "Hello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights. Myself… I study Pokémon as a profession. First, what is your name?\n",
      },
    ])
    .then((answers) =>
      console.log(`Right! So your name is ${answers.playerName}!`)
    )
);
