import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';
import Repository from '../pages/Repository';

// path="/repositories/:repository+" o + significa que tudo que vem depois da barra
// é parâmetro dinâmico da rota
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
