const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "freshshoe465",
  database: "kennectfitness",
});

connection.connect();

const getUsers = (callback) => {
  connection.query("SELECT * FROM USERS", (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const addUser = (name, callback) => {
  connection.query(
    `INSERT INTO USERS (user) VALUES ('${name}')`,
    (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    }
  );
};

const getWorkouts = (name, callback) => {
  connection.query(
    `SELECT * FROM WORKOUTS WHERE USER = '${name}'`,
    (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    }
  );
};

const addWorkout = (user, workoutName, data, callback) => {
  data.forEach((record) => {
    record.sets.forEach((set, idx) => {
      connection.query(
        `INSERT INTO WORKOUTS (user, workout, date, rep_info, current_set) VALUES ('${user}', '${workoutName}', '${
          record.date
        }', '${set}', '${idx + 1}')`,
        (err) => {
          if (err) {
            callback(err);
          }
        }
      );
    });
  });
  callback(null, "Successfully added workout to database");
};

const editWorkout = (id, repInfo, callback) => {
  console.log(id, repInfo)
  connection.query(`UPDATE workouts SET rep_info = '${repInfo}' WHERE id = ${id}`, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  })
}

module.exports = { getUsers, addUser, getWorkouts, addWorkout, editWorkout };
