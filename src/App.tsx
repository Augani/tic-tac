import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import Home from './screens/Home';
import Play from './screens/Play';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
     <Router>
     <Switch>
        <Route path='/play'>
          <Play />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
