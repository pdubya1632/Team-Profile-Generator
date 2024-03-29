const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = 'Engineer';
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    super.getRole();
    return this.role;
  }
}

module.exports = Engineer;
