import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/main/Home';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
