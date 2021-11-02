DROP DATABASE kennectfitness;

CREATE DATABASE kennectfitness;

USE kennectfitness;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user varchar(30)
);

-- DROP TABLE workouts;

CREATE TABLE workouts (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user varchar (30),
    workout varchar (60),
    workoutDate DATE,
    rep_info int (11),
    weight  int (11),
    current_set int (11)
);

INSERT INTO WORKOUTS (user, workout, workoutDate, rep_info, weight, current_set) VALUES ('Kenny', 'Chest Press', '2020-05-01', 5, 50, 1);
INSERT INTO WORKOUTS (user, workout, workoutDate, rep_info, weight, current_set) VALUES ('Kenny', 'Chest Press', '2020-05-01', 5, 50, 2);
INSERT INTO WORKOUTS (user, workout, workoutDate, rep_info, weight, current_set) VALUES ('Kenny', 'Chest Press', '2020-05-01', 5, 50, 3);
INSERT INTO WORKOUTS (user, workout, workoutDate, rep_info, weight, current_set) VALUES ('Kenny', 'Chest Press', '2020-05-02', 5, 50, 1);
INSERT INTO WORKOUTS (user, workout, workoutDate, rep_info, weight, current_set) VALUES ('Kenny', 'Chest Press', '2020-05-02', 5, 50, 2);
INSERT INTO WORKOUTS (user, workout, workoutDate, rep_info, weight, current_set) VALUES ('Kenny', 'Chest Press', '2020-05-02', 5, 50, 3);
INSERT INTO WORKOUTS (user, workout, workoutDate, rep_info, weight, current_set) VALUES ('Kenny', 'Chest Press', '2020-05-03', 10, 55, 1);
INSERT INTO WORKOUTS (user, workout, workoutDate, rep_info, weight, current_set) VALUES ('Kenny', 'Chest Press', '2020-05-03', 10, 56, 2);
INSERT INTO WORKOUTS (user, workout, workoutDate, rep_info, weight, current_set) VALUES ('Kenny', 'Chest Press', '2020-05-03', 10, 65, 3);
INSERT INTO WORKOUTS (user, workout, workoutDate, rep_info, weight, current_set) VALUES ('Kenny', 'Chest Press', '2020-05-03', 10, 60, 3);

INSERT INTO USERS (user) VALUES ('Kenny');
INSERT INTO USERS (user) VALUES ('Kasper');
INSERT INTO USERS (user) VALUES ('Yuzu');
INSERT INTO USERS (user) VALUES ('Toto');