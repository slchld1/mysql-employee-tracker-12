DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;

USE management_db;

-- table for department
CREATE TABLE `department` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(30) -- department name 30 characters
)

-- table for role
CREATE TABLE `roles` (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `title` VARCHAR(30) NOT NULL,
    `salary` DECIMAL NOT NULL,
    `department_id` INT NOT NULL,
)

-- table for employee
CREATE TABLE `employee` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `role_id` INT NOT NULL,
    `manager_id` INT
)