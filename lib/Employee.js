class Employee {
    constructor(data) {
        const {name, id, email, officeNumber, username, school} = data;

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
        this.officeNumber = officeNumber;
        this.username = username;
        this.school = school;
    }

    grabName() {
        return this.name
    }

    grabId() {
        return this.id;
    }

    grabEmail() {
        return this.email;
    }

    grabRole() {
        return this.role;
    }

};

module.exports = Employee