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
      message: "Credits:",
      default: false,
    },
    {
      type: "input",
      name: "License",
      message: "License:",
      default: false,
    },
    {
      type: "input",
      name: "Badges",
      message: "Badges:",
      default: false,
    },
    {
      type: "input",
      name: "Features",
      message: "Features:",
      default: false,
    },
    {
      type: "input",
      name: "Tests",
      message: "Tests:",
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
