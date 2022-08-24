const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, id, email, number) {
    super(name, id, email);
    this.number = number;
    this.role = 'Manager';
  }
  getNumber() {
    return this.number;
  }
  getRole() {
    super.getRole();
    return this.role;
  }
}

module.exports = Manager;
