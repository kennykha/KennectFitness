import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UsersList from "./pages/UsersListPage";
import UserWorkouts from "./pages/UserWorkoutPage";
import Header from "./Header";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0070f3",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Header />
          <Switch>
            <Route exact path="/" component={UsersList} />
            <Route path="/user/:name" component={UserWorkouts} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
