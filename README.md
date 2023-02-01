<h1 align="center">README.md Generator Using Node.js 📠</h1>
<p>
    <img src="https://img.shields.io/github/repo-size/slchld1/mysql-employee-tracker-12" />
    <img src="https://img.shields.io/github/languages/top/slchld1/mysql-employee-tracker-12"  />
    <img src="https://img.shields.io/github/last-commit/slchld1/mysql-employee-tracker-12" />
    <img src="https://img.shields.io/badge/license-MIT-brightgreen"/>
</p>

## Description 💾
Mysql Employee Tracker is an application created with `nodejs` using `mysql2` to enable users to access their database without going through the trouble of coding to update each and every details!

The application uses `inquirer` to prompt messages in your terminal to quickly access the local database.
## User Story ✉️
~~~
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
~~~
## Acceptance Criteria 📩
~~~
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
~~~
## Table of Contents 🔍
* [Installation](#installation-)
* [Usage](#usage-)
* [Questions](#questions-)
* [License](#license)
## Installation 🔨
To run the application please, `git clone` the repo down to your local.

Direct to the `Develop` folder in terminal and run `npm install` or `npm i` in order to install the following npm package,

* [`mysql2`](https://www.npmjs.com/package/mysql2) will enable access to your localhost database.
* [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.
* [`console.table`](https://www.npmjs.com/package/console.table) enables you to view database in console.
* [`dotenv`](https://www.npmjs.com/package/dotenv) zero-dependency module to load into database.
* [`figlet`](https://www.npmjs.com/package/figlet) allows you to create a ASCII art banner from text.

in order to start the application, you must first direct to the `db` folder and source the schema.sql and seeds.sql(optional) file into your local database.

then direct to the .env file and enter your login information to mysql.

Once those two steps are complete, type `npm start` in the command line to run node server.js,

which will launch the application selection screen into the terminal.

## Usage 💡
[Selection Menu Screenshot](screenshot_selectionMenu.jpg)

Once application is launched, you will be directed to the selection screen. The selection screen contains 7 different functions.

[View All Employees](viewAllEmployees.jpg)

Above screenshot is an example of the `view all employees` option.

Adding or updating options will prompt you questions necessary in order to add or update data.

Here is a video example of running the application: <a target=_blank>https://streamable.com/0qzchc</a>
## License
MIT License


## Questions ❓

For any Additional questions, Please reach out to: jaecho203@gmail.com

Or visit slchld1 on github! Thank you.

