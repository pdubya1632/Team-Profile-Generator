const pkg = require('enquirer');
const { prompt } = pkg;

const { writeFileSync } = require('fs');

const createPage = require('./src/page-template.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

const employeeQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the employee's first name?",
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is their ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is their email?',
  },
];

const managerQuestions = [
  {
    type: 'input',
    name: 'number',
    message: 'What is their office number?',
  },
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is their github profile link?',
  },
];

const internQuestions = [
  {
    type: 'input',
    name: 'school',
    message: 'Which school did they attend?',
  },
];

const addManager = () => {
  prompt([...employeeQuestions, ...managerQuestions]).then(
    (answers) => {
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.number
      );
      teamMembers.push(newManager);
      addWrite();
    }
  );
};

const addEngineer = () => {
  prompt([...employeeQuestions, ...engineerQuestions]).then(
    (answers) => {
      const newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(newEngineer);
      addWrite();
    }
  );
};

const addIntern = () => {
  prompt([...employeeQuestions, ...internQuestions]).then(
    (answers) => {
      const newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(newIntern);
      addWrite();
    }
  );
};

const addWrite = () => {
  prompt({
    type: 'select',
    name: 'role',
    message:
      'Do you want to add a new team member OR write the current team to index.html?',
    choices: ['Add', 'Write'],
  }).then((answers) => {
    if (answers.role === 'Add') {
      addMember();
    } else if (answers.role === 'Write') {
      writeHTML();
    }
  });
};

const addMember = () => {
  prompt({
    type: 'select',
    name: 'type',
    message: 'Do you want to add an Engineer or Intern to the team?',
    choices: ['Engineer', 'Intern'],
  }).then((answers) => {
    switch (answers.type) {
      case 'Engineer':
        addEngineer();
        break;
      case 'Intern':
        addIntern();
        break;
      default:
        console.error('Role not found');
        break;
    }
  });
};

const writeHTML = () => {
  // const htmlContent = createPage(teamMembers);

  writeFileSync('./dist/index.html', createPage(teamMembers), (err) =>
    err
      ? console.log(err)
      : console.log('Successfully created index.html!')
  );
};

const init = () => {
  prompt({
    type: 'toggle',
    name: 'continue',
    message: "Are you ready to enter the team Manager's information?",
    enabled: 'Yep',
    disabled: 'Nope',
  }).then((answers) => {
    if (answers.continue === false) {
      process.exit();
    } else {
      addManager();
    }
  });
  // .catch(console.error);
};

init();

// validation to ensure that user input is in the proper format.
