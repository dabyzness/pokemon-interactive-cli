import inquirer from "inquirer";
import fs from "fs";
import { pokemon } from "../data/data.js";

// Boy this was annoying
const canItEvolve = async (inputs = [], i = 0) => {
  const prompts = [
    {
      type: "list",
      name: "canEvolve",
      message: `Can ${pokemon[i].name} evolve?`,
      choices: ["yes", "no"],
    },
  ];

  const { ...answers } = await inquirer.prompt(prompts);

  const newInputs = [...inputs, answers];

  i += 1;

  return i < pokemon.length ? canItEvolve(newInputs, i) : newInputs;
};

const main = async () => {
  const inputs = await canItEvolve();
  const updated = pokemon.map((pokemon, i) => ({ ...pokemon, ...inputs[i] }));

  updated.forEach((update) => {
    fs.appendFile(
      "./data/data.js",
      `${JSON.stringify(update)},`,
      "utf8",
      (err) => {
        console.log(err);
      }
    );
  });
};

main();
