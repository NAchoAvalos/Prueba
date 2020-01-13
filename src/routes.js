// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Contenido from './componentes/Contenido';
import Home from './componentes/Home';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contenido" component={Contenido} />
    </Switch>
  </App>;

export default AppRoutes;