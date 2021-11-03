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
