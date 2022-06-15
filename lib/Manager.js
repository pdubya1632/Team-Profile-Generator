const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
      this.officeNumber = officeNumber;
    }
    getNumber() {
      return this.officeNumber;
    }
    getRole() {
      super.getRole();
      return 'Manager';
    }
  }

  module.exports = Manager;