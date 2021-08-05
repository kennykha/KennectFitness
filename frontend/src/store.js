import { createStore, applyMiddleware, compose } from "redux";

// this file is just setup for our redux store
import { enhancers, middlewares } from "./middleware";
import rootReducer from "./reducers/rootReducer";

// redux store's initial state if needed (keeping it empty for now)
const preloadedState = () => {};

// simply adding some bonus functionality to our store, look in middleware file for more info
const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(rootReducer, preloadedState(), composedEnhancers);

const configureStore = () => {
  return { store };
};

export default configureStore;
