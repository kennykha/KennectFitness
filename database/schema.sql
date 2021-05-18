DROP DATABASE kennectfitness;

CREATE DATABASE kennectfitness;

USE kennectfitness;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user varchar(30),
);

INSERT INTO USERS (user) VALUES ('Kenny');