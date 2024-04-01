#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t Wellcome to CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 3 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Enter your guess number(number 1 to 3)",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations ! You guess a correct number");
}
else {
    console.log("Sorry ! You guess a wrong number");
}
