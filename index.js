const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateIndex = require('./lib/Profile');
const writeFile = require('./utils/generate-site');



// this file collects the information and passes it to employee
const templateArray = [];
const indexArray = [];

const profile = () => {

    return inquirer
    .prompt([
        {
            type: 'list',
            message: 'What role does this Employee fill?',
            name: 'role',
            choices: ['Engineer', 'Manager', 'Intern']
        },
        {
            type: 'input',
            message: "What is the employee's name?",
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('')
                }
            }

        },
        {
            type: 'input',
            message: "What is the employee's ID number?",
            name: 'id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('')
                }
            }
        },
        {
            type: 'input',
            message: "What is the employee's email?",
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('')
                }
            }
        }    
    ])
    .then(data => {
        if(data.role === 'Manager') {
            managerPrompt(data)
        } else if (data.role === 'Intern') {
            internPrompt(data)
        } else {
            engineerPrompt(data)
        }
    })
};

const managerPrompt = (answers) => {
    
    return inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the manager's phone number?",
            name: 'number',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('You must enter the managers phone number!')
                }
            }
        }
    ])
    .then(data => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.role, data.number)
       templateArray.push(manager)
       addEmployee();
    });
    
};

const internPrompt = (answers) => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What school does the intern attend?',
            name: 'intern',
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log('You must enter the school the intern attends!')
                }
            },

        }
    ])
    .then(data => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.role, data.intern)
        templateArray.push(intern);
        addEmployee();
    });
};

const engineerPrompt = (answers) => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: "Please provide a link to the Engineer's github?",
            name: 'Github',
            validate: Github => {
                if (Github) {
                    return true;
                } else {
                    console.log('You must enter a link the Engineers github!')
                }
            }
        }
    ])
    .then(data => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.role, data.Github)
        templateArray.push(engineer);
        addEmployee();
    });
};

// add another prompt that will build the file when the user is done adding data
const addEmployee = () => {
    return inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another employee?',
            name: 'addEmployee',
            default: false 
        }
    ])
    .then(data => {
        if(data.addEmployee === true) {
            profile();
        } else {
            generateIndex(templateArray)
            
            // .then(pageData => {
            //     indexArray.push(pageData)
            //     console.log(indexArray);
            // })
            // .then(indexArray => {
            //     writeFile(indexArray);
            // })
            // .catch(err => {
            //     console.log(err);
            // })
        }
    });
};



profile();    
