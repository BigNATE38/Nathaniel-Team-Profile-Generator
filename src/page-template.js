const employeesCreate = (listEmployees) => {
    const employeesCreated = [];
    for (let i = 0; i < listEmployees.length; i++) {
        let employee = 
        `<div class="col-4 d-flex justify-content-center">
            <div class="card" style="width: 23rem;">
                <div class="card-header bg-success text-white fs-3 fw-bold">
                    <h4 class="bg-success text-white fs-3 fw-bold">
                        ${listEmployees[i].name}
                </h4>
                <h6>
                    <span> `

        if(listEmployees[i].grabRole() === "Manager") {
            employee += `<i class="fas fa-crown"></i> </span> ${listEmployees[i].role}
            `
        } else if(listEmployees[i].grabRole() === "Engineer") {
            employee += `<i class="fas fa-tools"></i> </span> ${listEmployees[i].role}
            `
        } else {
            employee += `<i class="fas fa-pencil-alt"></i> </span> ${listEmployees[i].role}
            `
        }

        employee +=
            `            </h6>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${listEmployees[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${listEmployees[i].email}">${listEmployees[i].email}</a></li>
                    `
        if (listEmployees[i].officeNumber) {
            employee += `<li class="list-group-item">Office Number: ${listEmployees[i].officeNumber}</li>
            `
        }
        if (listEmployees[i].username) {
            employee += `<li class="list-group-item">GitHub: <a href="https://github.com/${listEmployees[i].username}">${listEmployees[i].username}</a></li>
            `
        }
        if (listEmployees[i].school) {
            employee += `<li class="list-group-item">School: ${listEmployees[i].school}</li>
            `
        }
        employee +=
            `       </ul>
                </div>
            </div>
        </div>
        `
        employeesCreated.push(employee);
    }
    return employeesCreated.join('');
};

module.exports = listEmployees => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap">
        <title>Nathaniel-Team-Profile-Generate</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-success">
            <span class="navbar-brand h1 w-100 text-center !important" style="font-size: 36px">My Awesome Team</span>
        </nav>
        </br>
        <div class="row justify-content-around" style="grid-row-gap: 20px">
            ${employeesCreate(listEmployees)}
        </div>
    </body>
    </html>
    `
};


