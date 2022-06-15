const Employee = require('./Employee');

export class Manager extends Employee {
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