CREATE DATABASE products;

CREATE TABLE product(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  price decimal(12,2) NOT NULL,
  is_active tinyint NOT NULL
);
