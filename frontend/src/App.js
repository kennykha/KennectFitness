import UsersList from "./pages/UsersListPage";
import UserWorkouts from "./pages/UserWorkoutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import WorkoutCard from "./components/workoutCard";
import UserWorkoutDetailPage from "./pages/UserWorkoutDetailPage";

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <title>KennectFitness</title>
        </header>
        <main className="main">
          <h1 className="title">
            Kennect
            <a href="/">Fitness</a>
          </h1>
          <Switch>
            <Route exact path="/" component={UsersList} />
            <Route exact path="/users/:name" component={UserWorkouts} />
            <Route
              exact
              path="/users/:name/workouts/:workout"
              component={UserWorkoutDetailPage}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
