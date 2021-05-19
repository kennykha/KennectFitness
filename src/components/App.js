import User from './user';
import UserData from './userData';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
      <div className="container">
        <header>
          <title>KennectFitness</title>
        </header>
        <main className='main'>
          <h1 className='title'>Kennect<Link to='/'><a href='/'>Fitness</a></Link></h1>
          <Route exact path='/'>
            <User />
          </Route>
          <Route path='/user/:name'>
            <UserData />
          </Route>
        </main>
      </div>       
      </Switch>
    </Router>
  );
}

export default App;
