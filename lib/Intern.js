const Employee = require('./Employee');

export class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
    getRole() {
      super.getRole();
      return 'Intern';
    }
  }

  module.exports = Intern;