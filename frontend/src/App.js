import UsersList from "./pages/UsersListPage";
import UserData from "./components/userData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            <Route path="/user/:name" component={UserData} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
