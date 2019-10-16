DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_id INTEGER(10) NULL,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INTEGER(10),
  stock_quantity INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (25626, "Black dress", "Women", 64, 95);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (36742, "Blue jeans", "Men", 68, 84);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (99821, "Grey jacket", "Boys", 30, 76);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (78325, "Black boots", "Women", 235, 51);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (41633, "Pink sneakers", "Girls", 42, 62);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (56561, "2 pack of tights", "Girls", 14, 43);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (15235, "Green blouse", "Women", 33, 37);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (89767, "Striped t-shirt", "Boys", 19, 46);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (21563, "A-line skirt", "Women", 54, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (52554, "Slouchy beanie", "Men", 17, 23);