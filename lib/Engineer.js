const Employee = require("./Employee");

export class Engineer extends Employee {
  constructor(githubUsername) {
    this.githubUsername = githubUsername;
  }
  getGithubUsername() {
    return this.githubUsername;
  }
  getRole() {
    super.getRole();
    return "Engineer";
  }
}

module.exports = Engineer;