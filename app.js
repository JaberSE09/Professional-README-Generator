const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./src/readmeTemplete");
const writeFile = require("./utils/generate-README");

const promtUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "Title: (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Description",
      message: "Description: (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Install",
      message: "Installation instructions: (Required)",
      validate: (installInput) => {
        if (installInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Usage",
      message: "Usage: (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Credits",
      message: "Credits: (Required)",
      validate: (creditsInput) => {
        if (creditsInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: 'list',
      name: 'License',
      message: 'License:',
      choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
      type: "input",
      name: "Tests",
      message: "Tests: (Required)",
      validate: (featureInput) => {
        if (featureInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Github",
      message: "Github: (Required)",
      validate: (gitInput) => {
        if (gitInput) {
          return true;
        } else {
          return false;
        }
      }
      },
      {
        type: "input",
        name: "Email",
        message: "Email: (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            return false;
          }
        },
    },
  ]);
};

promtUser()
  .then((readmeData) => {
    writeFile(generateReadme(readmeData));
  })
  .catch((err) => {
    console.log(err);
  });
