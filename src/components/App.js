import axios from 'axios';
import User from './user';

function App() {
  return (
    <div className="container">
      <header>
        <title>KennectFitness</title>
      </header>
      <main className='main'>
        <h1 className='title'>Kennect<a href='/'>Fitness</a></h1>
        <User />
      </main>
    </div>
  );
}

export default App;
