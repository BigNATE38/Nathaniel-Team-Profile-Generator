const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);

        this.role = 'Intern';
    }

    grabSchool() {
        return this.school;
    }

    grabRole() {
        return this.role;
    }

};

module.exports = Intern;