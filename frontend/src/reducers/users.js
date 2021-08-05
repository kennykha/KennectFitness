import { combineReducers } from "redux";

import { FETCH_USERS_SUCCESS, ADD_USER_SUCCESS } from "../actions/users";

const list = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      // return the list served from backend response
      return action.payload;
    case ADD_USER_SUCCESS:
      // add newly created user to our existing list
      return [state, ...action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  list,
});
