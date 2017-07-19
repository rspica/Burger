CREATE DATABASE burgers_db;

USE burger_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean NOT NULL,
	burger_date TIMESTAMP NOT NULL DEFUALT CURRENT_TIMESTAMP,
	PRIMARY KEY ('id')
);

