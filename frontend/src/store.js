import { createStore, applyMiddleware, compose } from "redux";

import { enhancers, middlewares } from "./middleware";
import rootReducer from "./reducers/rootReducer";

const preloadedState = () => {};

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(rootReducer, preloadedState(), composedEnhancers);

export default () => {
  return { store };
};
