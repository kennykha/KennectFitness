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

const getWorkoutNames = (name, callback) => {
  connection.query(
    `SELECT DISTINCT workout FROM WORKOUTS WHERE USER = '${name}'`,
    (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    }
  );
};

const getWorkoutData = (name, workoutName, callback) => {
  connection.query(
    `SELECT * FROM WORKOUTS WHERE USER = '${name}' AND WORKOUT = '${workoutName}' ORDER BY workoutDate DESC, current_set ASC`,
    (err, result) => {
      if (err) {
        console.log("getWorkoutData ERROR: ", err);
        callback(err);
      } else {
        callback(null, result);
      }
    }
  );
};

const deleteWorkoutData = (sqlId, callback) => {
  connection.query(
    `DELETE FROM WORKOUTS WHERE ID = ${sqlId}`,
    (err, result) => {
      if (err) {
        console.log("Unable to delete workout data");
        callback(err);
      } else {
        callback(null, result);
      }
    }
  );
};

const addWorkout = (user, workoutName, callback) => {
  connection.query(
    `INSERT INTO WORKOUTS (user, workout) VALUES ('${user}', '${workoutName}')`,
    (err) => {
      if (err) {
        console.log("addWorkoutData ERROR: ", err);
        callback(err);
      }
    }
  );
  callback(null, "Successfully added workout to database");
};

// Used for set addition as well as first time date addition
const addWorkoutData = (
  user,
  workoutName,
  date,
  set,
  rep,
  weight,
  callback
) => {
  connection.query(
    `INSERT INTO WORKOUTS (user, workout, workoutDate, current_set, rep_info, weight) VALUES ('${user}', '${workoutName}', '${date}', ${set}, ${rep}, ${weight})`,
    (err) => {
      if (err) {
        console.log("Unable to add WorkoutData: ", err);
        callback(err);
      }
    }
  );
  callback(null, "Successfully added workout data to database");
};

// const editWorkout = (id, repInfo, callback) => {
//   connection.query(
//     `UPDATE workouts SET rep_info = '${repInfo}' WHERE id = ${id}`,
//     (err, result) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, result);
//       }
//     }
//   );
// };

// const addSet = (user, dates, currentWorkout, setInfo, callback) => {
//   connection.query(
//     `INSERT INTO workouts (user, workout, workoutDate, rep_info, current_set) VALUES ?`,
//     [dates.map((date) => [user, currentWorkout, date, "   ", setInfo])],
//     (err) => {
//       if (err) {
//         callback(err);
//       } else {
//         connection.query(
//           `SELECT * FROM WORKOUTS where user = '${user}' AND workout = '${currentWorkout}'`,
//           (err, result) => {
//             if (err) {
//               console.log(err);
//               callback(err);
//             } else {
//               console.log("made it into select all");
//               callback(null, result);
//             }
//           }
//         );
//       }
//     }
//   );
// };

// const addDate = (user, currentWorkout, sets, callback) => {
//   connection.query(
//     `INSERT INTO workouts (user, workout, workoutDate, rep_info, current_set) VALUES ?`,
//     [sets.map((set) => [user, currentWorkout, "   ", "   ", set])],
//     (err) => {
//       if (err) {
//         callback(err);
//       } else {
//         connection.query(
//           `SELECT * FROM WORKOUTS where user = '${user}' AND workout = '${currentWorkout}'`,
//           (err, result) => {
//             if (err) {
//               callback(err);
//             } else {
//               callback(null, result);
//             }
//           }
//         );
//       }
//     }
//   );
// };

module.exports = {
  getUsers,
  addUser,
  getWorkoutNames,
  getWorkoutData,
  addWorkout,
  addWorkoutData,
  deleteWorkoutData,
  // editWorkout,
  // editDate,
  // addSet,
  // addDate,
};
