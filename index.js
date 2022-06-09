const { prompt } = require("enquirer"); // https://github.com/enquirer/enquirer
const { writeFile } = require("fs");

// EMPLOYEE
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

// The other three classes will extend Employee.

// MANAGER
// officeNumber
// getRole() — overridden to return 'Manager'

// ENGINEER
// github—GitHub username
// getGithub()
// getRole() — overridden to return 'Engineer'

// INTERN
// school
// getSchool()
// getRole()—overridden to return 'Intern'

// validation to ensure that user input is in the proper format.