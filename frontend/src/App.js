import UsersList from "./pages/UsersListPage";
import UserWorkouts from "./pages/UserWorkoutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div className="container">
        <Layout>
          <Header />
          <Switch>
            <Route exact path="/" component={UsersList} />
            <Route path="/user/:name" component={UserWorkouts} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
