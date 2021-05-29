const inquirer = require('inquirer');

// this file collects the information and passes it to employee

function Profile() {
    

}


Profile.prototype.concatinate = function() {
    // may not be necessary but combines all of the data.
}

Profile.prototype.generateIndex = function() {
    // generates  a new index.html with all of the returned Employee Data

};

// inquirer
// .prompt({
//     type: 'input',
//     message: "What is the employee's name?",
//     name: 'name'

// })
// .then(({ name }) => {
//     this.name = name;
//     return this.id;
// })

// inquirer
// .prompt({
//     type: 'input',
//     message: "What is the Employee's ID number?",
//     name: 'id'
// })
// .then(({ id }) => {
//     this.id = id
//     return this.id;
// }) 

// inquirer
// .prompt({
//     type: 'input',
//     message: "Please provide a link to the Engineer's github",
//     name: 'Github'
// })

// inquirer
// .prompt({
//     type: 'input',
//     message: "What is the employee's email?",
//     name: 'email'
// })
// .then(({ email }) => {
//     this.email = email;
//     return this.email;
// });

// inquirer
// .prompt({
//     type: 'list',
//     message: 'What role does this Employee fill?',
//     name: 'role',
//     choices: ['Engineer', 'Manager', 'Intern']
// })
// .then(({ role }) => {
//     this.role = role;
//     return this.role;
// })