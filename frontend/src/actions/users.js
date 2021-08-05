import axios from "axios";

export const fetchUsers = () => (dispatch) => {
  axios
    .get("/getUsers")
    .then((response) => {
      // console.log("Response from server/db: ", response.data);
      // setUsers(response.data);
    })
    .catch((err) => console.log(err));
};

export const addUser = (name) => (dispatch) => {
  axios
    .post("/addUser", { name })
    .then((success) => {
      // setUsers(success.data);
      // setShowEditForm(false);
    })
    .catch((err) => console.log(err));
};
