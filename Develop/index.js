// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const answers = function() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please try again");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "describe",
            message: "Describe your project: ",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please try again");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "install",
            message: "Give instructions for installation: ",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please try again");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "use",
            message: "How is thise site used?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please try again");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "credits",
            message: "Who else should be credited on this site?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please try again");
                }
                return true;
            }
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {   type: "input",
            name: "features",
            message: "What are some features of your site?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please try again");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "tests",
            message: "What tests have you done?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please try again");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "contactInfo",
            message: "Who is the contact for the site? ",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please try again");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "gitName",
            message: "Please enter your GitHub username: ",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please try again");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: ",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please try again");
                }
                return true;
            }
        }
    ]);
} 
answers()

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
