// Linking my employee page to my intern
const Employee = require('./Employee');

// Extends intern class = employee becomes parent class 
class Intern extends Employee {
    constructor(name, id, email, school) {
       //this will call parent contructor 
       super(name, id, email);

       this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern'
    }
}

 

module.exports = Intern;