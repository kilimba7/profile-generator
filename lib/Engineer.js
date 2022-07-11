// Linking my employee page to my engineer
const Employee = require('./Employee');

// Extends engineer class = employee becomes parent class 
class Engineer extends Employee {
    constructor(name, id, email, github) {
       //this will call parent contructor 
       super(name, id, email);
       
       this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer'
    }
}

 

module.exports = Engineer;