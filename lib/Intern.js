const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = 'Intern';
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    super.getRole();
    return this.role;
  }
}

module.exports = Intern;
