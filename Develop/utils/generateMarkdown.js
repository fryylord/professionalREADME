// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(userAnswers) {return `
![badge](https://img.shields.io/badge/license-${userAnswers.license}-blue)`}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(userAnswers) {
  let licenseType = userAnswers.license;
  let yourLicense = ''
  if(licenseType === 'Apache') {
    yourLicense = `![Click for more Information](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === 'Academic') {
    yourLicense = `![Click for more Information](https://opensource.org/licenses/AFL-3.0)`
  } else if (licenseType === 'GNU') {
    yourLicense = `![Click for more Information](https://opensource.org/licenses/GPL-3.0)`
  } else if (licenseType === 'ISC') {
    yourLicense = `![Click for more Information](https://opensource.org/licenses/ISC)`
  } else if (licenseType === 'MIT') {
    yourLicense = `![Click for more Information](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'Mozilla') {
    yourLicense = `![Click for more Information](https://opensource.org/licenses/MPL-2.0)`
  } else if (licenseType === 'Open') {
    yourLicense = `![Click for more Information](https://opensource.org/licenses/OSL-3.0)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userAnswers) {
  return `
  ${renderLicenseBadge(userAnswers)}
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
  
  ## Contributing
  ${userAnswers.credits}
  
  ## License
  ${userAnswers.license},  
  ${renderLicenseLink(userAnswers)}

  ## Features
  ${userAnswers.features}
  
  ## Tests
  ${userAnswers.tests}

  ## Questions
  ${userAnswers.contactInfo}  

  Find me on GitHub: [${userAnswers.gitName}](https://github.com/${userAnswers.gitName})  

  E-mail me : ${userAnswers.email}
`;
}

module.exports = generateMarkdown;
