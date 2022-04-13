const { truncate } = require("fs/promises");
const inquirer = require("inquirer");
const writeFile = require("./utils/generate-README");

const promtUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "README Title: ",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("README Title:");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Description",
      message: "Description:",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Description:");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "install",
      message: "Installation instructions:",
      validate: (installInput) => {
        if (installInput) {
          return true;
        } else {
          console.log("Installation instructions:");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Usage: ",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Usage:");
          return false;
        }
      },
    },
  ]);
};

promtUser();
