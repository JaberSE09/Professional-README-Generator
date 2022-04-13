var required;
const generateReadme = (readmeText) => {
  if (!readmeText) {
    return "";
  }

  required = `# ${readmeText.Title}

## Description

${readmeText.Description}

## Installation

${readmeText.Install}


## Usage

${readmeText.Usage}
`;

  if (readmeText.Credits) {
    required += `

## Credits

${readmeText.Credits}
`;
  }

  if (readmeText.License) {
    required += `

## License
${readmeText.License}`;
  }

  if (readmeText.Credits) {
    required += `

## Badges

${readmeText.Badges}
`;
  }

  if (readmeText.Features) {
    required += `

## Features

${readmeText.Features}
`;
  }

  if (readmeText.Tests) {
    {
      required += `

## Tests

${readmeText.Tests}
`;
    }

    return required;
  }
};

module.exports = generateReadme;
