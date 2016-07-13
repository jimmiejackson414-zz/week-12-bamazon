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