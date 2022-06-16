import Employee from './Employee.js';

export default class Engineer extends Employee {
  constructor(name, id, email, githubUsername) {
    super(name, id, email);
    this.githubUsername = githubUsername;
  }
  getGithubUsername() {
    return this.githubUsername;
  }
  getRole() {
    super.getRole();
    return 'Engineer';
  }
}