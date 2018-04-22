CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INTEGER(5) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    primary key(item_id)
);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("Enchilada","Mexican",2.50,100),
    ("Tacos","Mexican",3.50,200),
    ("Burritos","Mexican",2.50,100),
    ("Pizza","Italian",3.50,50),
    ("Lasagna","Italian",4.25,100),
    ("Spaghetti","Italian",3.50,200),
    ("Hamburger","American",3.00,200),
    ("Cheeseburger","American",3.50,150),
    ("Sesame Chicken","Chinese",4.50,100),
    ("Fried Rice","Chinese",2.50,100);
