const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('grabs Manager office number', () => {
    const data = {
        name: "Nathaniel",
        id: 1,
        email: "natevandy38@gmail.com",
        officeNumber: 1
    };
    const manager = new Manager(data);

    expect(manager.officeNumber).toEqual(1);
});

test('grabs Manager role', () => {
    const data = {
            name: "Nathaniel",
            id: 1,
            email: "natevandy38@gmail.com",
            officeNumber: 1
        };
        const manager = new Manager(data);

        expect(manager.role).toBe('Manager');
});