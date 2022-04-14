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
      type: "input",
      name: "License",
      message: "License: (Required)",
      validate: (licenseInput) => {
        if (licenseInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Badges",
      message: "Badges: (Required)",
      validate: (badgeInput) => {
        if (badgeInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Features",
      message: "Features: (Required)",
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
      name: "Tests",
      message: "Tests: (Required)",
      validate: (testInput) => {
        if (testInput) {
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
