const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('grabs Engineer Github username', () => {
    const data = {
        name: "Nathaniel",
        id: 1,
        email: "natevandy38@gmail.com",
        username: 'BigNATE38'
    };
    const engineer = new Engineer(data);

    expect(engineer.username).toBe('BigNATE38');
});

test('grabs Engineer role', () => {
    const data = {
            name: "Nathaniel",
            id: 1,
            email: "natevandy38@gmail.com",
            username: 'BigNATE38'
        };
        const engineer = new Engineer(data);

        expect(engineer.role).toBe('Engineer');
});