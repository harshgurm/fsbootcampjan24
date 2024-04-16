CREATE TABLE `robogarden`.`employees` (
  `employee_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `department_name` VARCHAR(45) NULL,
  PRIMARY KEY (`employee_id`));


CREATE TABLE `robogarden`.`department` (
  `department_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `department_name` VARCHAR(45) NULL,
  PRIMARY KEY (`department_id`));
  
INSERT INTO `robogarden`.`employees`
 (`name`, `department_name`)
VALUES ('Sam', 'IT');
INSERT INTO `robogarden`.`employees`
 (`name`, `department_name`)
VALUES ('Nora', 'HR');
INSERT INTO `robogarden`.`employees`
 (`name`, `department_name`)
VALUES ('David', 'IT');
INSERT INTO `robogarden`.`employees`
 (`name`, `department_name`)
VALUES ('Queen', 'HR');


INSERT INTO `robogarden`.`employees`
VALUES ('7', 'Test', 'Teaching');

-- INsert 1 records into department table
-- select Queen from employee id 6

SELECT * FROM employees
WHERE employee_id = 6;

SELECT * FROM department;

INSERT INTO `robogarden`.`department`
 (`name`, `department_name`)
VALUES ('Queen', 'HR');

UPDATE robogarden.employees
SET name = 'Renan', department_name = 'Teaching'
WHERE employee_id = 6;

SELECT * FROM employees;


-- UPDATE the name of employee 7 to be Sukhi
UPDATE robogarden.employees
SET name = 'Sukhi' 
WHERE employee_id = 7;

-- DELETE employee with id 2
DELETE FROM robogarden.employees
WHERE employee_id = 2;


SELECT * FROM robogarden.orders;

-- DELETE ALL the data from a table
TRUNCATE TABLE orders;

-- To delete a table
DROP TABLE orders;

-- To see the structure of a table
DESCRIBE robogarden.customers;
-- OR
DESC robogarden.employees;

-- to drop a column from table structure
ALTER TABLE robogarden.employees
	DROP COLUMN department_name;

-- to add a column name city to customers table
ALTER TABLE robogarden.customers
	ADD COLUMN city varchar(45) NULL;

-- add a column to employee table name department_id
ALTER TABLE robogarden.employees
	ADD COLUMN department_id varchar(45) NULL;
	
-- made a mistake earlier by having varchar(45) for department_id now fixing it in this query
ALTER TABLE robogarden.employees
	MODIFY COLUMN department_id INT(11) NULL;
	
-- to add department_id as foreign key in employees table
ALTER TABLE robogarden.employees
	ADD CONSTRAINT FOREIGN KEY (department_id) REFERENCES department(department_id);
	
-- query to get the query of table creation
SHOW CREATE TABLE employees;

-- if you have to add the foreign key on table creation
CREATE TABLE `employees` (
  `employee_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `department_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci

		