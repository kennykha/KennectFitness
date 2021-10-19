-- DROP DATABASE kennectfitness;

-- CREATE DATABASE kennectfitness;

USE kennectfitness;

-- CREATE TABLE users (
--   id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   user varchar(30)
-- );

DROP TABLE workouts;

CREATE TABLE workouts (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user varchar (30),
    workout varchar (60),
    date varchar (30),
    rep_info varchar (30),
    current_set varchar (30)
);

-- INSERT INTO WORKOUTS (user, workout, date, rep_info, current_set) VALUES ('Kenny', 'Pull Ups', '5/1', '5 x 10', '1');
-- INSERT INTO WORKOUTS (user, workout, date, rep_info, current_set) VALUES ('Kenny', 'Pull Ups', '5/2', '5 x 10', '2');
-- INSERT INTO WORKOUTS (user, workout, date, rep_info, current_set) VALUES ('Kenny', 'Pull Ups', '5/3', '5 x 10', '3');
-- INSERT INTO WORKOUTS (user, workout, date, rep_info, current_set) VALUES ('Kenny', 'Bench Press', '5/1', '5 x 10', '1');
-- INSERT INTO WORKOUTS (user, workout, date, rep_info, current_set) VALUES ('Kenny', 'Bench Press', '5/2', '5 x 10', '2');
-- INSERT INTO WORKOUTS (user, workout, date, rep_info, current_set) VALUES ('Kenny', 'Bench Press', '5/3', '5 x 10', '3');

-- INSERT INTO USERS (user) VALUES ('Kenny');