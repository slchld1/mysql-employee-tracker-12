// require
const mysql = require('mysql2');
const inquirer = require('inquirer')
const connection = require('./config/connection');
const chalk = require('chalk')
const figlet = require('figlet');

// console.table for logging data
require('console.table')

// Make connection to database
connection.connect((err) => {
    if(err) throw err;
    console.log(chalk.bgBlack.bold(`=================================================================================================`))
    console.log(chalk.blue.bold('Connection has been established successfully.'));
    console.log(chalk.blue.bold(figlet.textSync('EMPLOYEE MANAGER')));
    console.log(chalk.bgBlack.bold(`=================================================================================================`))
    console.log(chalk.blue.bold(`Welcome, ${process.env.DB_USER}!`))
    //console.log("\r\n\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2591\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\r\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2591\r\n\u2588\u2588\u2551\u2591\u2591\u255A\u2550\u255D\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557\u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2557\u2591\r\n\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2557\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2551\u2591\u255A\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2554\u2550\u2550\u255D\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u255A\u2588\u2588\u2557\r\n\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2591\u255A\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\r\n\u2591\u255A\u2550\u2550\u2550\u2550\u255D\u2591\u2591\u255A\u2550\u2550\u2550\u2550\u255D\u2591\u255A\u2550\u255D\u2591\u2591\u255A\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u255D\u2591\u2591\u255A\u2550\u2550\u2550\u2550\u255D\u2591\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u2591\u255A\u2550\u2550\u2550\u2550\u255D\u2591\u2591\u255A\u2550\u2550\u2550\u2550\u2550\u255D\u2591")
    showPrompt();
});

// Starting Prompt (selection menu)
function showPrompt() {
    inquirer
        .prompt({
            type: "list",
            name: "selection_screen",
            message: "Welcome, How can I help you today?",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add Department",
                "Add Roles",
                "Add Employee",
                "Update Employee Role",
                "Quit"
            ]
        }).then((choices) => {
            switch(choices.selection_screen) {
                case "View All Departments": 
                    viewDepartments();
                    break;
                
                case "View All Roles": 
                    viewRoles();
                    break;
                
                case "View All Employees": 
                    viewEmpoyees();
                    break;
                
                case "Add Department": 
                    addDepartment();
                    break;
                
                case "Add Roles": 
                    addRoles();
                    break;
                
                case "Add Employee": 
                    addEmployee();
                    break;
                
                case "Update Employee Role": 
                    updateER();
                    break;
                
                case "Quit": 
                    console.log("BYE!")
                    connection.end()
                    break;
                
            }
        });
}

// ------- functions --------
// Go back function (Back to selection menu) (To prevent going back to selection screen instantly)
function goBack() {
    inquirer
        .prompt({

            type: "list",
            name: "go-back",
            message: "Selection Screen",
            choices: [
                "Go back to menu"
            ]
    }).then((choice) => {
            showPrompt()
    })
}
// View All Departments function
function viewDepartments() {
    connection.query(`SELECT department.id AS id,
        department.name AS department
        FROM department`, (err, response) => {
        if (err) throw err;
        console.log(chalk.yellow.bold('=================================================='))
        console.table(response);
        console.log(chalk.yellow.bold('=================================================='))
        goBack();
    })
}

// View All Roles function
function viewRoles() {
    connection.query(`SELECT role.id,
        role.title,
        role.salary,
        department.name as department
        FROM role
        INNER JOIN department ON
        role.department_id = department.id`, (err, response) => {
        if (err) throw err;
        console.log(chalk.yellow.bold('=================================================='))
        console.table(response);
        console.log(chalk.yellow.bold('=================================================='))
        goBack();
    })
}

// View All Employees function
function viewEmpoyees() {
    connection.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title,
                department.name AS department, role.salary,
                CONCAT (manager.first_name, " ", manager.last_name)
                AS manager FROM employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id
                LEFT JOIN employee manager ON employee.manager_id = manager.id`, (err, response) => {
        if (err) throw err;
        console.log(chalk.yellow.bold('============================================================================'))
        console.table(response);
        console.log(chalk.yellow.bold('============================================================================'))
        goBack();
    });
}

// ADD functions to create new departments, employees, or roles

// Add new department
function addDepartment(){
    inquirer
        .prompt({
            type: "input",
            name: "department_name",
            message: "Please enter the name of the new Department:"
        })
        .then((output) => {
            connection.query(`INSERT INTO department (name)
                            VALUES('${output.department_name}');`, (err, response) => {
            if (err) throw err;
            console.log(`New Department: ` + chalk.yellowBright.bold(`${output.department_name}`) + ` has been added!`)
            goBack();
            })
        })
}

// Add new roles
async function addRoles() {
    inquirer
        .prompt([{
        type: "input",
        name: "role_title",
        message: "Please enter the name of the new Role:"
    },
    {
        type: "input",
        name: "salary",
        message: "What is the salary of the new role?"
    }])
    .then((output) => {
        addRolesToDepartment();
        // New role is created
        connection.query(`INSERT INTO role (title, salary) 
        VALUES ('${output.role_title}', '${output.salary}');`
        , (err, response) => {
            if (err) throw err;
        })
    })
}
// Make department name list..then convert name to id and update latest inserted
function addRolesToDepartment() {
    connection.query(`SELECT department.name FROM department`, (err, response) => {
        if (err) throw err;
        let departmentName = [];
        response.forEach((department) => {departmentName.push(department.name)})
        inquirer
        .prompt(
        {
            type: "list",
            name: "department",
            message: "What department does this role belong to?",
            choices: departmentName
        })
        .then((output) => {
            // DepartmentName => department_id
            connection.query(`SELECT id FROM department WHERE name = '${output.department}';`, (err, response) => {
                if(err) throw err;
                connection.query(`UPDATE role SET department_id = ${response[0].id} WHERE id = (SELECT LAST_INSERT_ID());`);
                console.log('Role has been successfully added!')
                goBack();
            })
        });
    })
}
// Add Employee 

function addEmployee() {
    connection.query(`SELECT role.title FROM role`, (err, response) => {
        if (err) throw err;
        let roleArray = [];
        response.forEach((role) => {roleArray.push(role.title)})
        inquirer
        .prompt([{
            type: "input",
            name: "first_name",
            message: "Please enter the first name of the new Employee:"
        },
        {
            type: "input",
            name: "last_name",
            message: "Please enter the last name of the new Employee:"
        },
        {
            type: "list",
            name: "empRole",
            message: "What is the role of this new Employee?",
            choices: roleArray
        }
    ])
    .then((output) => {
        connection.query(`INSERT INTO employee (first_name, last_name)
        VALUE ('${output.first_name}', '${output.last_name}');`)
        connection.query(`SELECT id FROM role WHERE title = '${output.empRole}'`, (err, response) => {
            if(err) throw err;
            connection.query(`UPDATE employee SET role_id = ${response[0].id} WHERE id = (SELECT LAST_INSERT_ID());`, (err, response) => {
                if(err) throw err;
                console.log(`Employee ` + chalk.yellowBright.bold(`${output.empRole}`)` has successfully been added!`)
                goBack();
            })
        })
    })
})
}

// Update employee function
function updateER() { 
    connection.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title,
    role.salary,
    CONCAT (manager.first_name, " ", manager.last_name)
    AS manager FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id`, (err, response) => {
        if (err) throw err;
        console.log(response)
        // Use .map to create new value as employee name
        let employee_Name = response.map(({ id, first_name, last_name}) => ({value: id, name: `${first_name} ${last_name}`}))
        let role_Name = response.map(({id, title}) => ({id: id, value: `${title}` }))
        console.log(role_Name)
        inquirer
        .prompt([{
            type: "list",
            name: "employee_select",
            message: "What employee do you want to update?",
            choices:  employee_Name,
        },
        {
            type: "list",
            name: "employee_role",
            message: "Which role did you want to assign this employee?",
            choices: role_Name
        }])
        .then((output) => {
            console.log(output.employee_role)
            connection.query(`SELECT id FROM role WHERE title = '${output.employee_role}'`,(err, response) => {
                if (err) throw err
                console.log(response)
                connection.query(`UPDATE employee SET role_id = '${response[0].id}' WHERE employee.id = '${output.employee_select}';`, (err, response) => {
                    if (err) throw err 
                    console.log(`Employee ` + chalk.yellowBright.bold(`${output.employee_select}`) + ` has been succesfully updated!`)
                    goBack();
                })
            })
        })
    })
}

