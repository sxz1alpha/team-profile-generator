const Manager = require("../lib/Manager");

// extends employee
test('ensures employee values were imported', () => {
    const manager = new Manager('john');

    expect(manager.name).toBe('john');
    expect(manager.id).toBe(this.id);
    expect(manager.email).toBe(this.email);
});
// must include office number
test('ensures a number value is passed', () => {
    const manager = new Manager('jill');

    expect(manager.number).toBe(this.number);
});
// getRole() // overridden to return manager
test('test to make sure that the role string is overriden to be Manager', () => {
    const manager = new Manager('jill');


    expect(manager.getRole()).toContain('Manager');
});