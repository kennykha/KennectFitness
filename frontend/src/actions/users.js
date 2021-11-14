import axios from "axios";

export const getUsers = () => {
  return axios.get("/getUsers");
};

export const addUser = (name) => {
  return axios.post("/addUser", { name: name });
};

export const getUserWorkoutNames = (name) => {
  return axios.get(`/users/${name}`);
};

export const getUserWorkoutData = (name, workoutName) => {
  return axios.get(`/users/${name}/workouts/${workoutName}`);
};

export const addUserWorkout = (name, workoutName) => {
  return axios.post(`/users/${name}/workouts/addWorkout/${workoutName}`);
};

export const addUserWorkoutData = (
  name,
  workoutName,
  date,
  set,
  rep,
  weight
) => {
  return axios.post(
    `/users/${name}/workouts/addWorkout/${workoutName}/workoutData`,
    {
      name: name,
      workoutName: workoutName,
      date: date,
      set: set,
      rep: rep,
      weight: weight,
    }
  );
};

export const userDeleteWorkoutData = (sqlId) => {
  return axios.delete(`/deleteWorkout/${sqlId}`);
};

export const userAddSetWorkoutData = (
  name,
  workoutName,
  date,
  set,
  rep,
  weight
) => {
  return axios.post(`/users/${name}/workouts/addSet/${workoutName}`, {
    name: name,
    workoutName: workoutName,
    date: date,
    set: set,
    rep: rep,
    weight: weight,
  });
};
