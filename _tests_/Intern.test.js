const Intern = require('../lib/Intern')

// extension of employee
test('creates a Employee object', () => {
    const intern = new Intern('john');
    
    expect(intern.name).toBe('john');
    expect(intern.id).toBe(this.id);
    expect(intern.email).toBe(this.email);
})

//getSchool()
test('tests to make sure the interns school has been added to the object', () => {
    const intern = new Intern('john');

    expect(intern.getSchool()).toBe(this.school);
})

// getRole()
test('tests to make sure the interns school has been added to the object', () => {
    const intern = new Intern('john');

    expect(intern.getRole()).toContain('Intern');
})
