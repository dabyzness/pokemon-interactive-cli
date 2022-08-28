import inquirer from "inquirer";
import { from } from "rxjs";
import { Game } from "../modules/Game.js";
let playerName, rivalName;
let game;
const questions = [
    {
        type: "input",
        name: "playerName",
        message: "Hello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights. Myself… I study Pokémon as a profession. First, what is your name?\n",
    },
    {
        type: "input",
        name: "rivalName",
        message: "This is my grandson. He's been your rival since you were a baby. …Erm, what is his name again?\n",
    },
];
const observable = from(questions);
const myPromise = new Promise((resolve) => inquirer
    .prompt(observable)
    .ui.process.subscribe({
    next: (answer) => {
        if (answer.name === "playerName") {
            playerName = answer.answer;
            console.log(`Right! So your name is ${playerName}!`);
        }
        else {
            rivalName = answer.answer;
            console.log(`That's right! I remember now! His name is ${rivalName}!`);
        }
    },
    error: (err) => {
        console.log(`Error is: ${err}`);
    },
    complete: () => {
        console.log(`${playerName}! Your very own Pokémon legend is about to unfold! A world of dreams and adventures with Pokémon awaits! Let's go!`);
    },
})
    .add(() => {
    resolve(new Game(playerName, rivalName));
}));
async function setGame(promise) {
    const newGame = await promise;
    return newGame;
}
game = setGame(myPromise);
//# sourceMappingURL=index.js.map