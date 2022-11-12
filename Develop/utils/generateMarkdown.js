// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(userAnswers) {return `
![badge](https://img.shields.io/badge/license-${userAnswers.license}-blue)`}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userAnswers) {
  return `
  # ${userAnswers.projectTitle}

  ## Description  
  ${userAnswers.describe}
  
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
  ${userAnswers.install}
  
  ## Usage
  ${userAnswers.use}
  
  ## Credits
  ${userAnswers.credits}
  
  ## License
  ${userAnswers.license},
  ${renderLicenseBadge(userAnswers)}
  
  ## Features
  ${userAnswers.features}
  
  ## Tests
  ${userAnswers.tests}

  ## Contact
  ${userAnswers.contactInfo}  

  Find me on GitHub: [${userAnswers.gitName}](https://github.com/${userAnswers.gitName})  

  E-mail me : ${userAnswers.email}
`;
}

module.exports = generateMarkdown;
