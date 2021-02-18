// Requirement initiators
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlTemp");
const validator = require("email-validator");
const { mainModule } = require("process");


// Async functions
const writeFileAsync = until.promisfy(fs.writeFile);
const appendFileAsync = until.promisfy(fs.appendFile);




// Runs application
main();