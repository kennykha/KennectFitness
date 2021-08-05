import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";

export default function App() {
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
          <Routes />
        </main>
      </div>
    </Router>
  );
}
