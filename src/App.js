import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router'
import Main from "./Main";

 const App = () => {
  return (
      <Router>
          <Switch>
              <Route path="/" component={Main} exact />
          </Switch>
      </Router>
  );
}

export default App;
