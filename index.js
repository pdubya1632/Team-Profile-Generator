// const enquirer = require("enquirer");  // https://github.com/enquirer/enquirer
// import { prompt } from "enquirer";

import pkg from "enquirer";
const { prompt } = pkg;

import { writeFile } from "fs";

import Employee from "./lib/Employee.js";
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's full name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email?",
  },
];

const managerQuestion = [
  {
    type: "input",
    name: "number",
    message: "What is their office number?",
  },
];

const engineerQuestion = [
  {
    type: "input",
    name: "number",
    message: "What is their github profile link?",
  },
];

const internQuestion = [
  {
    type: "input",
    name: "number",
    message: "Which school did they attend?",
  },
];

const teamMembers = [];

const init = () => {
  prompt({
    type: "toggle",
    name: "continue",
    message: "Are you ready to enter the team Manager's information?",
    enabled: "Yep",
    disabled: "Nope",
  }).then((answer) => {
    if (answer.continue === false) {
      process.exit();
    } else {
      addManager();
    }
  });
  // .catch(console.error);
};

const addManager = () => {
  prompt([...employeeQuestions, ...managerQuestion]).then((answer) => {
    console.log(answer);
    teamMembers.push(answer);
    addWrite();
  });
};

const addEngineer = () => {
  prompt([...employeeQuestions, ...engineerQuestion]).then((answer) => {
    teamMembers.push(answer);
    addWrite();
  });
};

const addIntern = () => {
  prompt([...employeeQuestions, ...internQuestion]).then((answer) => {
    teamMembers.push(answer);
    addWrite();
  });
};

const addWrite = () => {
  prompt({
    type: "select",
    name: "role",
    message:
      "Do you want to add a new team member OR write the current team to index.html?",
    choices: ["Add", "Write"],
  }).then((answer) => {
    if (answer.role === "Add") {
      addTeam();
    } else if (answer === "Write") {
      writeFile();
    }
  });
};

const addTeam = () => {
  prompt({
    type: "select",
    name: "type",
    message: "Do you want to add an Engineer or Intern to the team?",
    choices: ["Engineer", "Intern"],
  }).then((answer) => {
    switch (answer.type) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        console.error("Role not found");
        break;
    }
  });
};

const generateHTML = ({ teamMembers }) =>
  `<html><body>${teamMembers}</body></html>`;

const writeHTML = () => {
  console.dir(teamMembers, { depth: null });
  // const htmlContent = generateHTML(teamMembers);

  // writeFile("index.html", htmlContent, (err) =>
  //   err ? console.log(err) : console.log("Successfully created README.md!")
  // );
};

init();

// validation to ensure that user input is in the proper format.
