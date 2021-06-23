import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  RouteComponentProps
} from "react-router-dom";
import Home from './screens/Home';

function App() {
  return (
    <Switch>
          <Route path="/play">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
  );
}

export default App;
