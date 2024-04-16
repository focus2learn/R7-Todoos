#! /usr/bin/env node
// Online class - 7, March 2024, to-do list ..
// Coding by Naushad Hussain, Class (Sunday 9-12) username: (focus2learn)
// import packages
import inquirer from "inquirer";
import chalk from "chalk";
// Assigned varibales and values..
let todoaray = [];
let condition = true;
// repeat loop
console.clear();
while (condition) {
    // get list item by prompt (user feed)
    let todolist1 = await inquirer.prompt([
        {
            name: "todolist2",
            type: "input",
            message: chalk.green("\n\n\n\\\t\t\twhat would you like to Add in Your List...?")
        },
        // repeat confirmation by user input
        {
            name: "addmore",
            type: "confirm",
            message: chalk.blue("\n\n\n\t\t\t\tDo You Want to Add More in Your List..."),
            default: false,
        }
    ]);
    // Pust data to Array
    todoaray.push(todolist1.todolist2);
    condition = todolist1.addmore;
    console.clear();
    console.log(chalk.green(`\n\t Horizontal List Data  :  ` + chalk.yellow(todoaray)));
}
// Diplay Array list vertically with using for loop
console.log(chalk.green("\n\n\t Vertical List Data "));
for (let i = 0; i < todoaray.length; i++) {
    console.log(chalk.yellow("\n\t\t\t " + i + "-  " + todoaray[i]));
}
;
// END OF CODING BY FOCUS2LEARN.....
