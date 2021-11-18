const express = require("express");
const App = express();
const db = require("../database/index");

App.use(express.json());

App.get("/", (req, res) => {
  res.status(200).send("Root end point hit");
});

App.get("/getUsers", (req, res) => {
  db.getUsers((err, result) => {
    if (err) {
      res.status(404).send("Cannot retrieve users");
    } else {
      res.status(200).send(result);
    }
  });
});

App.post("/addUser", (req, res) => {
  db.addUser(req.body.name, (err, success) => {
    if (err) {
      res.status(404).send("Unable to add new user");
    } else {
      db.getUsers((err, result) => {
        if (err) {
          res.status(404).send("Cannot retrieve users");
        } else {
          res.status(200).send(result);
        }
      });
    }
  });
});

App.post("/users/:name/workouts/addWorkout/:workoutName", (req, res) => {
  const { name: user, workoutName } = req.params;
  db.addWorkout(user, workoutName, (err, success) => {
    if (err) {
      console.log(err);
      res.status(404).send("Unable to add workout");
    } else {
      res.status(200).send(success);
    }
  });
});

App.post(
  "/users/:name/workouts/addWorkout/:workoutName/workoutData",
  (req, res) => {
    const { name, workoutName, date, set, rep, weight } = req.body;
    db.addWorkoutData(
      name,
      workoutName,
      date,
      set,
      rep,
      weight,
      (err, success) => {
        if (err) {
          console.log(err);
          res.status(404).send("Unable to add workout data");
        } else {
          res.status(200).send(success);
        }
      }
    );
  }
);

App.delete("/deleteWorkout/:id", (req, res) => {
  const { id: sqlId } = req.params;
  db.deleteWorkoutData(sqlId, (err, success) => {
    if (err) {
      console.log(err);
      res.status(404).send("Unable to delete workout data");
    } else {
      res.status(200).send(success);
    }
  });
});

App.get("/users/:name", (req, res) => {
  db.getWorkoutNames(req.params.name, (err, response) => {
    if (err) {
      res.status(400).send("Unable to retrieve workouts");
    } else {
      res.status(200).send(response);
    }
  });
});

App.get("/users/:name/workouts/:workoutName", (req, res) => {
  const { name, workoutName } = req.params;
  db.getWorkoutData(name, workoutName, (err, response) => {
    if (err) {
      console.log(err);
      res.status(400).send("Unable to retrieve workout data");
    } else {
      const result = {};
      response.forEach((workout) => {
        const { workoutDate } = workout;
        if (result[workoutDate]) {
          result[workoutDate].workout.push(workout);
          result[workoutDate] = {
            ...result[workoutDate],
            maxSet: Math.max(result[workoutDate].maxSet, workout.current_set),
            maxWeight: Math.max(result[workoutDate].maxWeight, workout.weight),
            maxRep: Math.max(result[workoutDate].maxRep, workout.rep_info),
          };
        } else {
          result[workoutDate] = {
            workout: [workout],
            maxSet: workout.current_set,
            maxWeight: workout.weight,
            maxRep: workout.rep_info,
            open: false,
          };
        }
      });
      res.status(200).send(result);
    }
  });
});

App.listen(3001, () => {
  console.log("Listening on Port 3001");
});
