CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
	itemID INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR(45) NULL,
    departmentName VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    stockQuantity INT NULL,
    PRIMARY KEY (`itemID`)
);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Sugar-Free Gummy Bears', 'Food', 5, 20);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Canon 24-105mm Lens', 'Photography', 800, 5);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Black Capo', 'Music', 4, 50);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Pocky Chocolate Sticks', 'Food', 2, 200);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('L-Bracket', 'Photography', 75, 20);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Assorted Guitar Picks', 'Music', 2, 50);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Vegemite', 'Food', 10, 0);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Sling Strap', 'Photography', 15, 30);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Guitar Polish', 'Music', 5, 100);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Freeze Dried Ice Cream', 'Food', 10, 80);

SELECT * FROM products;