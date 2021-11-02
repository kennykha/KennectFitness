const express = require("express");
const App = express();
const db = require("../database/index");

App.use(express.json());

App.get("/", (req, res) => {
  res.status(200).send("Root end point hit");
});

App.get("/getUsers", (req, res) => {
  console.log("Hit getUsers endpoint");
  db.getUsers((err, result) => {
    if (err) {
      res.status(404).send("Cannot retrieve users");
    } else {
      res.status(200).send(result);
    }
  });
});

App.put("/addUser", (req, res) => {
  console.log(req.body.name);
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

App.post("/addWorkoutData", (req, res) => {
  const { user, workoutData } = req.body;
  const { workoutName, data } = workoutData;
  db.addWorkout(user, workoutName, data, (err, success) => {
    if (err) {
      console.log(err);
      res.status(404).send("Unable to add workout");
    } else {
      res.status(200).send(success);
    }
  });
  res.status(200).send("Testing");
});

App.post("/editWorkoutData", (req, res) => {
  const { id, data } = req.body;
  db.editWorkout(id, data, (err, success) => {
    if (err) {
      res.status(404).send("Unable to edit workout data");
    } else {
      res.status(200).send(success);
    }
  });
});

App.post("/editDate", (req, res) => {
  const { user, date, currentWorkout, currentDate } = req.body;
  db.editDate(user, date, currentWorkout, currentDate, (err, success) => {
    if (err) {
      res.status(404).send("Unable to edit date");
    } else {
      res.status(200).send(success);
    }
  });
});

App.post("/addSet", (req, res) => {
  const { user, dates, currentWorkout, setInfo } = req.body;
  db.addSet(user, dates, currentWorkout, setInfo, (err, success) => {
    if (err) {
      res.status(404).send("Unable to add new set");
    } else {
      res.status(200).send(success);
    }
  });
});

App.post("/addDate", (req, res) => {
  const { user, currentWorkout, sets } = req.body;
  db.addDate(user, currentWorkout, sets, (err, success) => {
    if (err) {
      res.status(404).send("Unable to add new date");
    } else {
      // console.log(success);
      res.status(200).send(success);
    }
  });
});

App.get("/users/:name", (req, res) => {
  console.log("/user/:name endpoint reached for: ", req.params.name);
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
      // console.log(response);
      const result = {};
      response.forEach((workout) => {
        console.log(workout);
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
      console.log(result);
      res.status(200).send(result);
    }
  });
});

App.listen(3001, () => {
  console.log("Listening on Port 3001");
});
