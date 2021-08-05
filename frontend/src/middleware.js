import thunk from "redux-thunk";

const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const middlewares = [thunk];

// logger must be the last middleware passed into applyMiddleware, otherwise it will log the thunk and any involved promises
if (process.env.NODE_ENV !== "production") {
  const { createLogger } = require("redux-logger");
  const logger = createLogger({
    collapsed: true,
  });
  middlewares.push(logger);
}

export { enhancers, middlewares };

/* Custom Middleware Functions

// log any actions which end in FAIL to the console
const actionLogger = store => next => action => {
  if (action && action.type && action.type.endsWith('FAIL')) {
    console.log('action failed', action)
  }

  return next(action)
}

// assign our redux state to window.reduxState after each action is reduced for easy debugging
const reduxStateDebugger = store => next => action => {
  let result = next(action)
  window.reduxState = store.getState()
  return result
}
*/
