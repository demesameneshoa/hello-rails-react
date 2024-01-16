import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/greeting" component={Greeting} />
        {/* ... other routes */}
      </Switch>
    </Router>
  );
};

export default App;
