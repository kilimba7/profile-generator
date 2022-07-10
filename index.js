// Packages needed for the app
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');



//Created an array for initial questions 
const questions = () => {
    return inquirer
    .prompt([
    {
        type: 'input',
        name: 'employee',
        message: 'Please enter the name of your employee (Required)',
        validate: employeeInput => {
            if (employeeInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email for a point of contact(Required)!',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter a valid email!');
              return false;
            }
          }
    },
    
    ]);
};

// Creates a function that generates the index.html
questions()
.then(pageData => {
    const generateHTML = generatePage(pageData);

    fs.writeFile('./index.html', generateHTML, err => {
        if (err) throw new Error (err);

        console.log('Profiles for team members created!')
    });
});
