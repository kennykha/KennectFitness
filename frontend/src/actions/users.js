import axios from "axios";

export const getUsers = () => {
  return axios.get("/getUsers");
};

export const addUser = (name) => {
  return axios.post("/addUser", { name: name });
};

export const getUserWorkoutData = (name) => {
  return axios.get(`/user/${name}`);
};
