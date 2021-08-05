import axios from "axios";

// action types, also used in reducers/users
// I generally like to use constants so I don't mispell types

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const ADD_USER = "ADD_USER";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

// If possible, keep all the action logic for users here
export const fetchUsers = () => (dispatch) => {
  // Doesn't do anything right now, but it's nice to have to keep track of when the request was fired (i.e. for loading logic)
  dispatch({ type: FETCH_USERS });

  axios
    .get("/users")
    .then((response) => {
      // This is connected to reducers/users
      console.log("Response from server/db: ", response.data);
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_USERS_FAILURE, err });
    });
};

export const addUser = (name) => (dispatch) => {
  dispatch({ type: ADD_USER });
  axios
    .post("/users/add", { name })
    .then((response) => {
      dispatch({ type: ADD_USER_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_USER_FAILURE, err });
    });
};
