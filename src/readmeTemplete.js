var required;
const generateReadme = (readmeText) => {
  if (!readmeText) {
    return "";
  }

  required = `# ${readmeText.Title}

## Description

${readmeText.Description}

`
var toc=`## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
`



var required2 =`
## Installation

${readmeText.Install}

## Usage

${readmeText.Usage}
`;

  if (readmeText.Credits) {
    required2 += `
## Credits

${readmeText.Credits}
`;
  }

  if (readmeText.License) {
    required2 += `
## License

${readmeText.License}
`;
  }

  if (readmeText.Credits) {
    required2 += `
## Badges

${readmeText.Badges}

`;
toc +=`- [Badge](#Badge)
`
  }

  if (readmeText.Features) {
    required2 += `## Features

${readmeText.Features}
`;
toc +=`- [Features](#Features)
`
  }

  if (readmeText.Tests) {
    {
      required2 += `
## Tests

${readmeText.Tests}
`;
toc +=`- [Tests](#Tests)
`
    }
    


var readme= required+toc+required2
    return readme;
  }
};

module.exports = generateReadme;
