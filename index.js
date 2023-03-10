const fs = require('fs')
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const createPage = require('./src/page-template')
const writeFile = require('./utils/generate-the-site.js');
const listEmployees = [];

const questionManager = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?',
        validate: inputName => {
            if (inputName) {
                return true;
            } else {
                console.log('Please enter the team manager name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the team manager?',
        validate: (inputID) => {
            if (isNaN(inputID)) {
                return "Please enter valid ID";
            } 
            return true;
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the team manager?',
        validate: inputEmail => {
            if (inputEmail) {
                return true;
            } else {
                console.log('Please enter the email of the team manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of the team manager?',
        validate: (inputOfficeNumber) => {
            if (isNaN(inputOfficeNumber)) {
                return "Please enter a valid office number."
            } 
                return true;
        },
    },
];

const plusEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'nextStep',
            message: 'Which of the following would you like to do next?',
            choices: [
                "Add an engineer.",
                "Add an intern.",
                "Finish building my team"
            ]

        }

    ])
    .then(data => {
        switch (data.nextStep) {
            case 'Add an engineer.':
                plusEngineer();
                break;
            case 'Add an intern.':
                plusIntern();
                break;
            case 'Finish building my team':
                const pageHtml = createPage(listEmployees);
                writeFile(pageHtml);
                break;
        }
    })
        
};

const plusEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the engineer?',
            validate: inputID => {
                if (isNaN(inputID)) {
                    return "Please enter a valid ID.";
                } 
                    return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the engineer?',
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log('Please enter the email of the engineer.');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is the GitHub username of the engineer?',
            validate: inputUserName => {
                if (inputUserName) {
                    return true;
                } else {
                    console.log('Please enter the GitHub username of the engineer.');
                    return false;
                }
            },
        },
    ])
    .then(data => {
        const teamMember = new Engineer(data);
        console.log(data)
        console.log(teamMember.role);
        listEmployees.push(teamMember);
        console.log(listEmployees);
        plusEmployee();
    })
};

const plusIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the intern?',
            validate: inputID => {
                if (isNaN(inputID)) {
                    return "Please enter a valid ID.";
                } 
                return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the intern?',
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log('Please enter the email of the intern.');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the intern?',
            validate: inputSchool => {
                if (inputSchool) {
                    return true;
                } else {
                    console.log('Please enter the school username of the intern.');
                    return false;
                }
            },
        },
    ])
    .then(data => {
        const teamMember = new Intern(data);
        console.log(data);
        console.log(teamMember.role);
        listEmployees.push(teamMember);
        console.log(listEmployees);
        plusEmployee();
    })
};


function init() {
    return inquirer.prompt(questionManager);
};

init()
    .then(data => {
        return new Manager(data);
    })
    .then(data => {
        const entryManager = data;
        console.log(data);
        listEmployees.push(entryManager);
        console.log(listEmployees);
    })
    .then(plusEmployee)
    .catch(err => {
        console.log(err);
    });

