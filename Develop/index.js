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
        },
        {
            type: "input",
            name: "describe",
            message: "Describe your project: "
        },
        {
            type: "input",
            name: "install",
            message: "Give instructions for installation: ",
        },
        {
            type: "input",
            name: "use",
            message: "How is thise site used?"
        },
        {
            type: "input",
            name: "credits",
            message: "Who else should be credited on this site?"
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
            message: "What are some features of your site?"
        },
        {
            type: "input",
            name: "tests",
            message: "What tests have you done?"
        },
        {
            type: "input",
            name: "contactInfo",
            message: "Who is the contact for the site? "
        },
        {
            type: "input",
            name: "gitName",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
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
