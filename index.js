const enquirer = require("enquirer");
const { prompt } = require("enquirer"); // https://github.com/enquirer/enquirer
const { writeFile } = require("fs");

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// const addEmployee = () => {
//   prompt([
//     {
//       type: "select",
//       name: "role",
//       message: "Which role do you want to add?",
//       choices: ["Manager", "Engineer", "Intern"],
//     },
//     {
//       type: "input",
//       name: "name",
//       message: "What is their full name?",
//     },
//     {
//       type: "input",
//       name: "id",
//       message: "What is their ID?",
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "What is their email?",
//     },
//   ])
//     .then((answers) => {
//       let employee = new Employee(
//         answers.name,
//         answers.id,
//         answers.email,
//         answers.role
//       );
//       console.log(employee);
//     })
//     .catch(console.error);
// };

const addInfo = (role) => {
  prompt([])
    .then((answers) => {
      let employee = new Employee(answers.name, answers.id, answers.email);
      console.log(employee);
      // const readmeContent = generateReadme(answers);

      // writeFile('README.md', readmeContent, (err) =>
      //   err ? console.log(err) : console.log('Successfully created README.md!')
      // );
    })
    .catch(console.error);
};

const testEmployee = new Employee();
const name = await testEmployee.name;
console.log(name);

// validation to ensure that user input is in the proper format.
