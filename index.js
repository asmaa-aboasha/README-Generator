const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter project title:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter project description:"
    },
    {
        type: "input",
        name: "toc",
        message: "Enter table of contents:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:"
    },
    {
        type: "list",
        name: "license",
        message: "Select a license:",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "None"]
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address:"
    }
])

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
