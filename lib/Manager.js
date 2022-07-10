// Linking my employee page to my manager
const Employee = require('./Employee');

// Extends manager class = employee becomes parent class 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
       //this will call parent contructor 
       super(name, id, email);

       this.officeNumber = officeNumber;
    }

    // getOfficeNumber() {
    //     return this.officeNumber
    // }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;