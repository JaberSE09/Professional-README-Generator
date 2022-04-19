
//gets the license toc ready and returns it
function renderLicenseTOC(license) {
  if (license !== "no license") {
    return `- [License](#license)`;
  } else {
    return " ";
  }
}

//Sets the badge for the readme
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return " ";
  }
}

//license section display
function renderLicenseSection(license) {
  if (license !== "no license") {
    return `## License

  The application is covered under the following license:
  ${renderLicenseLink(license)}`;
  } else {
    return " ";
  }
}

//sets the link to the license
function renderLicenseLink(license) {
  if (license !== "no license") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return " ";
  }
}

const generateReadme = (readmeText) => {
  if (!readmeText) {
    return " ";
  }

  var required = `# ${readmeText.Title}

  ${renderLicenseBadge(readmeText.License)}

## Table-of-Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseTOC(readmeText.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${readmeText.Description}

## Installation

${readmeText.Install}

## Usage

${readmeText.Usage}

${renderLicenseSection(readmeText.License)}

## Tests

${readmeText.Tests}

## Questions

Please contact me using the following links:

[GitHub](https://github.com/${readmeText.Github})

[Email: ${readmeText.Email}](mailto:${readmeText.Email})
`;
  return required;
};

module.exports = generateReadme;
