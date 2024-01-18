// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else {
    return 'None';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `![License: ${license}](https://opensource.org/license/${license})`;
  } else {
    return 'None';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  } else {
    return 'None';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.Description}


  ## Table of Contents

  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#Questions)

  ## Installation
  ${data.Installation}

  ## License
  ${renderLicenseSection(data.license)} 
  ${renderLicenseLink(data.license)}

  ## How to Contribute
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Questions

  if you have any Questions Email me ${data.email}
  or
  contact me Github ${data.github}


`;
}

module.exports = generateMarkdown;
