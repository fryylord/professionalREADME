// Function that returns a license badge based on which license is passed in

function renderLicenseBadge(userAnswers) {return `
![badge](https://img.shields.io/badge/license-${userAnswers.license}-blue)`}


// Function that returns the license link
function renderLicenseLink(userAnswers) {
  let licenseType = userAnswers.license;
  let yourLicense = ''
  if(licenseType === 'Apache') {
    yourLicense = `[Click for more Information](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (licenseType === 'Academic') {
    yourLicense = `[Click for more Information](https://opensource.org/licenses/AFL-3.0)`
  } else if (licenseType === 'GNU') {
    yourLicense = `[Click for more Information](https://choosealicense.com/licenses/lgpl-3.0/)`
  } else if (licenseType === 'ISC') {
    yourLicense = `[Click for more Information](https://opensource.org/licenses/ISC)`
  } else if (licenseType === 'MIT') {
    yourLicense = `[Click for more Information](https://choosealicense.com/licenses/mit/)`
  } else if (licenseType === 'Mozilla') {
    yourLicense = `[Click for more Information](https://choosealicense.com/licenses/mpl-2.0/)`
  } else if (licenseType === 'Open') {
    yourLicense = `[Click for more Information](https://opensource.org/licenses/OSL-3.0)`
  } else {
    yourLicense = ''
  }
  return yourLicense;
}

// Function that returns the license section of README
function renderLicenseSection(userAnswers) {
  return `## License  
  ${userAnswers.license} License  
  ${renderLicenseLink(userAnswers)}`
}

// Function to generate markdown for README
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

  ${renderLicenseSection(userAnswers)}

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
