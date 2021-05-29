const inquirer = require('inquirer');

// this file collects the information and passes it to employee

const profile = () => {

    inquirer
    .prompt(
        {
            type: 'list',
            message: 'What role does this Employee fill?',
            name: 'role',
            choices: ['Engineer', 'Manager', 'Intern', 'Employee']
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
            message: "What is the Employee's ID number?",
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
        },
        {
            type: 'input',
            message: "Please provide a link to the Engineer's github",
            name: 'Github',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('')
                }
            },
            when: (role) => {
                if (role === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'input',
            message: 'What school does the intern attend?',
            name: 'intern',
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log('')
                }
            },
            when: (role) => {
                if (role === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the manager's phone number?",
            name: 'number',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('')
                }
            },
            when: (role) => {
                if (role === 'Manager') {
                    return true;
                } else {
                    return false;
                }
            }
        }
    )
    // .then()
}


// Profile.prototype.concatinate = function() {
//     // may not be necessary but combines all of the data.
// }

// Profile.prototype.generateIndex = function() {
//     // generates  a new index.html with all of the returned Employee Data

// };




profile();








