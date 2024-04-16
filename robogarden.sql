-- use to create a database
create database robogarden;

-- use to select that database by default
use robogarden;

/*creating customer table*/
CREATE TABLE `robogarden`.`customers` (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `customer_first_name` VARCHAR(45) NOT NULL,
  `customer_last_name` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  PRIMARY KEY (`customer_id`));

/*creating orders table*/
CREATE TABLE `robogarden`.`orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `order_date` date NULL,
  PRIMARY KEY (`order_id`));
  
-- One line Comments in Mysql
/*
Multi line comments
Explain about data types as well
INSERT INTO `robogarden`.`customers` (`customer_first_name`, `customer_last_name`) VALUES ('Again', 'Testing');
*/

/*
* for all the columns 
*/
SELECT *
FROM robogarden.customers;


/*
specific columns
select where address is Toronto
*/
SELECT customer_first_name, customer_last_name, address
FROM robogarden.customers
WHERE address = 'Toronto';

/*select all customers where first name is Harsh */
Select * 
from customers
WHERE customer_first_name = 'Harsh';

-- To do
-- Find customers with id 2
Select * 
from customers
WHERE customer_id = 2;

/* used for like cases */
SELECT * 
from robogarden.customers
WHERE customer_first_name LIKE '%ar%';

SELECT * 
from robogarden.customers
WHERE customer_first_name LIKE '%a%' OR address LIKE '%ar%' OR customer_last_name LIKE '%a%';

/*Practice the above using AND as well*/
