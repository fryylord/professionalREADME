// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${answers.projectTitle} 👋</h1>

  ## Description  
  ${answers.description}
  
  ## Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Tests](#tests)
  - [Contact](#contact)
  
  ## Installation
  ${answers.install}
  
  ## Usage
  ${answers.use}
  
  ## Credits
  ${answers.credits}
  
  ## License
  ${answers.license}
  
  ## Features
  ${answers.features}
  
  ## Tests
  ${answers.tests}

  ## Contact
  ${answers.contactInfo}  
  <br />
  Find me on GitHub: [${answers.gitName}](https://github.com/${answers.gitName})  
  <br />
  E-mail me : ${answers.email}
`;
}

module.exports = generateMarkdown;
