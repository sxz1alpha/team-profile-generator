const { test, expect } = require("@jest/globals");
const Employee = require('../lib/Employee')
// must pass a name string or object
test('creates a Employee object', () => {
    const employee = new Employee('john');
    
    expect(employee.name).toBe('john');
    expect(employee.id).toBe(this.id);
    expect(employee.email).toBe(this.email);
    expect(employee.role).toBe('employee');
});

//must pass an id string or object
test('gets employee id', () => {
    const employee = new Employee('john');

    expect(employee.id).toBe(this.id);
});

// must pass an email
test('gets employee email', () => {
    const employee = new Employee('john');

    expect(employee.email).toBe(this.email);
});
// getName()
test('gets employee name', () => {
    const employee = new Employee();

    expect(employee.name).toBe(this.name);
});
// getRole() // returns Employee
test('gets employee role and returns Employee', () => {
    const employee = new Employee('John');

    expect(employee.name).toEqual(expect.stringContaining(employee.name.toString()));
});

