import inquirer from "inquirer";
import fs from "fs";
import { Pokemon, pokemon } from "../data/data.js";

// Boy this was annoying
const canItEvolve = async (
  inputs: Object[] = [],
  i: number = 0
): Promise<Object[] | Function> => {
  const prompts: Array<Object> = [
    {
      type: "list",
      name: "canEvolve",
      message: `Can ${pokemon[i].name} evolve?`,
      choices: ["yes", "no"],
    },
  ];

  const { ...answers }: string[] = await inquirer.prompt(prompts);

  const newInputs = [...inputs, answers];

  i += 1;

  return i < pokemon.length ? canItEvolve(newInputs, i) : newInputs;
};

const main = async () => {
  const inputs = await canItEvolve();
  const updated: Pokemon[] = pokemon.map((pokemon, i) => {
    const canEvolve: boolean = inputs[i] === "yes" ? true : false;

    return { ...pokemon, canEvolve };
  });

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
