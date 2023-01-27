const mysql = require('mysql2');
const inquirer = require('inquirer')
const connection = require('./config/connection');
const chalk = require('chalk')
const figlet = require('figlet');




require('console.table')

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
// Go back function
function goBack() {
    inquirer
        .prompt({

            type: "list",
            name: "go-back",
            message: "Selection Screen",
            choices: [
                "Go back to menu"
            ]
    }).then((choices) => {
            showPrompt();
    })
}
// View All Departments function
function viewDepartments() {
    connection.query(`SELECT * FROM department`, (err, response) => {
        if (err) throw err;
        console.log(chalk.yellow.bold('=================================================='))
        console.table(response);
        console.log(chalk.yellow.bold('=================================================='))
        goBack();
    })
}

// View All Roles function
function viewRoles() {
    connection.query(`SELECT * FROM role`, (err, response) => {
        if (err) throw err;
        console.log(chalk.yellow.bold('=================================================='))
        console.table(response);
        console.log(chalk.yellow.bold('=================================================='))
        goBack();
    })
}

// View All Employees function
function viewEmpoyees() {
    connection.query(connection.query(`SELECT
    CONCAT(e.last_name, ', ', e.first_name) AS 'Employee Name',
    CONCAT(m.last_name, ', ', m.first_name) AS Manager
FROM
employee e
INNER JOIN employee m ON 
    m.role_id = e.manager_id`, (err, response) => {
        if (err) throw err;
        console.log(chalk.yellow.bold('=================================================='))
        console.table(response);
        console.log(chalk.yellow.bold('=================================================='))
    }),
    goBack()
)}

