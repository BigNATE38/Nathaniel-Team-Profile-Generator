const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('grabs Intern school', () => {
    const data = {
        name: "Nathaniel",
        id: 1,
        email: "natevandy38@gmail.com",
        school: 'UCI Coding Bootcamp'
    };
    const intern = new Intern(data);

    expect(intern.school).toBe('UCI Coding Bootcamp');
});

test('grabs Intern role', () => {
    const data = {
            name: "Nathaniel",
            id: 1,
            email: "natevandy38@gmail.com",
            school: 'UCI Coding Bootcamp'
        };
        const intern = new Intern(data);

        expect(intern.role).toBe('Intern');
});