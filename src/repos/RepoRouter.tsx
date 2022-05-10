import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Repos from './Repos';

function About() {
  return (
    <div>
      <h2>
        <Repos />
      </h2>
    </div>
  );
}

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/about">Teste</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
