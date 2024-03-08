-- Save it to be uploaded on git writing_sql_queries.sql
-- Order by and then the column name to arrange them in ASC|DESC order
SELECT * FROM orders
ORDER BY order_date DESC;


-- Get all orders belonging to a particular customer.
SELECT * 
FROM orders
WHERE customer_id = 20;

-- Get the top three most expensive items in the items table.
-- use limit clause to show certain records
SELECT * FROM items
ORDER BY unit_price DESC
LIMIT 3;