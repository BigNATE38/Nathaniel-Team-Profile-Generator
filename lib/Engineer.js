const { ModernFakeTimers } = require('@jest/fake-timers');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email, username);

        this.role = 'Engineer';
    }

    grabUsername() {
        return this.username;
    }

    grabRole() {
        return this.role;
    }

};

module.exports = Engineer;