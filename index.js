// Packages needed for the app
const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = [];

const generatePage = require('./src/page-template');



//Created an array for initial questions 
const questionsManager = () => {
    return inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name (Manager)',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter your ID',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email for a point of contact!'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter your office number'
    }
    ])
    .then(val => {
      const m = new Manager(
        val.name,
        val.id,
        val.email,
        val.officeNumber
      )
      team.push(m);
      addToTeam();
    });

};

function addToTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'select',
        message: 'Select an engineer or intern to the team. If done, select FINISHED',
        choices: ['Engineer', 'Intern', 'FINISHED']
      },
    ])
    .then(data => {
      switch (data.select) {
        case 'Engineer':
        questionsEngineer();
        break;

        case 'Intern':
        questionsIntern();
        break;

        default:
          finishTeam();
    }
});
};

const questionsEngineer = () => {
 
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?'
    },

    {
      type: 'confirm',
      name: 'engineer',
      message: 'Please confirm that your role is engineer',
      default: true
    },
  ])
  .then(val => {
    const e = new Engineer(
      val.name,
      val.id,
      val.email,
      val.github,
      val.engineer
    )
    team.push(e);
    addToTeam();
  });
};


const questionsIntern = () => {
  
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Where did you go to school?'
    },
    {
      type: 'confirm',
      name: 'intern',
      message: 'Please confirm that your role is an intern',
      default: true
    },
  ])
  .then(val => {
    const i = new Intern(
      val.name,
      val.id,
      val.email,
      val.school,
      val.intern
    )
    team.push(i);
    addToTeam();
  });
};

const finishTeam = () => {
    const pageHTML = generatePage(team);

    fs.writeFile('./output.html', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    });
  };


questionsManager();

