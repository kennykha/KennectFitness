import { combineReducers } from "redux";

import { FETCH_USERS_SUCCESS, ADD_USER_SUCCESS } from "../actions/users";

// You can get this information in components.
// Example: components/usersList/UsersList

const list = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      // Return the list served from backend response
      return action.payload;
    case ADD_USER_SUCCESS:
      // Add newly created user to our existing list
      return [state, ...action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  list,
});
