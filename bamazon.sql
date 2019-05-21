CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name varchar(30),
    price DECIMAL(10,2) NOT NUll,
    stock_quantity INT null,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nikon D3100", "Electronics", 350, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("brembo brakes", "automotive", 500, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("M & Ms", "Candy", 3.00, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Intake Manifold", "automotive", 350, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HP Laptop", "Electronics", 944, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Go Pro", "Electronics", 120, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rockstar", "Beverags", 3.50, 222);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chicken Coop", "Pets", 232, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gaming Mouse", "Electronics", 40, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Iphone", "Electronics", 1100, 5);