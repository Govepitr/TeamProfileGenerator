// Requirement initiators
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlTemp");
const validator = require("email-validator");



// Async functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

console.clear();

console.log("Team Portfolio Generator by Dan Arbelo")

// Application primary function
async function main() {
  try {
    await prompt()

    for(let i = 0; i <teamArray.length; i++){
      teamString = teamString + html.generateCard(teamArray[i]);
    }
    let finalHtml = html.generateHTML(teamString)

    console.clear();
    console.table("✍️ Creating index.html file ✍️");

    writeFileAsync("./dist/index.html", finalHtml);

    console.clear();
    console.table("😤 index.html file has been created! 😤");
  } catch(err) {
    return console.log(err);
  }
}

// Prompts to collect user data

async function prompt() {
  let responseDone = "";

  do{
    try{
      console.log("------------------------------------------------");
      let response = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the employee's name?",
          validate: function validateName(name){
            return name !== '';
          }
        },
        {
          type: "input",
          name: "id",
          message: "Enter the employee's ID: ",
          validate: function validateName(name){
            return name !== '';
          }
        },
        {
          type: "input",
          name: "email",
          message: "Enter the employee's email address: ",
          // Here's where the email validation occurs via email-validator
          validate: function validateEmail(name){
            return validator.validate(name);
          }
        },
        {
          type: "list",
          name: "role",
          message: "Enter the employee's role: ",
          choices: [
            "Engineer",
            "Intern",
            "Manager"
          ]
        }          
      ]);

      let response2 = ""

        if (response.role === "Engineer") {
          response2 = await inquirer.prompt([{
            type: "inut",
            name: "x",
            message: "Please enter their GitHub username: ",
            validate: function validateName(name) {
              return name !== '';
            },
        },]);

        // Add them to the array
        const engineer = new Engineer(response.name, response.id, response.email, response2.x);
        teamArray.push(engineer);

      } else if (response.role === "Intern") {
          response2 = await inquirer.prompt([{
            type: "input",
            name: "x",
            message: "Please enter their attending school name: ",
            validate: function validateName(name) {
              return name !== '';
            },
        },]);

        // Add them to the team array
        const intern = new Intern(response.name, response.id, response.email, response2.x);
        teamArray.push(intern);

      } else if (response.role === "Manager") {
          response2 = await inquirer.prompt([{
            type: "input",
            name: "x",
            message: "Please enter yourr office number: ",
            validate: function validateName(name){
              return name !== '';
            },
          },]);

          // Add them to the 1st spot of the team array
          const manager = new Manager(response.name, response.id, response.email, response2.x);
          teamArray.unshift(manager);
      }
    } catch(err) {
      return console.log(err);
    }
    responseDone = await inquirer.prompt([{
      type: "list",
      name: "finish",
      message: "Would you like to continue?",
      choices:
      [
        "Yes",
        "No"
      ] 
    },]);

  } while (responseDone.finish === "Yes");
}

// Runs application
main();