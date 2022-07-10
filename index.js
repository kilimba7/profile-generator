// Packages needed for the app
const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generatePage = require('./src/page-template');



//Created an array for initial questions 
const questionsEmployee = () => {
    return inquirer
    .prompt([
    {
        type: 'input',
        name: 'employee',
        message: 'Please enter the name of your employee',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email for a point of contact!'
    },
    {
      type: 'list',
      name: 'role',
      choices: ['Intern', 'Manager', 'Engineer']
    }
    
    ]);
};



// Creates a function that generates the index.html
questionsEmployee()
.then(pageData => {
    const generateHTML = generatePage(pageData);

    fs.writeFile('./index.html', generateHTML, err => {
        if (err) throw new Error (err);

        console.log('Profiles for team members created!')
    });
});
