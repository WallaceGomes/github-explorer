import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';
import Repository from '../pages/Repository/indes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
