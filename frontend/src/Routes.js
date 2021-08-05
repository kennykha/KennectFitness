import React from "react";
import { Switch, Route } from "react-router-dom";

import Users from "./pages/Users";
import UserData from "./components/userData";

// Keeping routes logic in its own component/file will be easier to maintain
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Users} />
      <Route path="/user/:name" component={UserData} />
    </Switch>
  );
}
