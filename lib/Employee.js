
const Profile = require('./Profile')


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'employee'
    }
    
    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email
    }
    
    getRole() {
        if(this.role === 'Manager') {

        } else if (this.role === 'Engineer') {

        } else if (this.role === 'intern') {

        } else {
            return this.role
        }
    }
}









module.exports = Employee;