import UsersList from "./pages/UsersListPage";
import UserWorkouts from "./pages/UserWorkoutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="container">
        <main className="main">
          <Header />
          <Switch>
            <Route exact path="/" component={UsersList} />
            <Route path="/user/:name" component={UserWorkouts} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
