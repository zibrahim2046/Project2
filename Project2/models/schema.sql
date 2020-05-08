### Schema

CREATE DATABASE faciaDB;
USE faciaDB;

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	salary INT NOT NULL,
	monthly expenses INT NOT NULL,
	budget INT NOT NULL,
	PRIMARY KEY (id)
	
);
