import React from 'react';
import { Route } from 'react-router-dom';
import routeComponentMap from './routeComponentMap';

const Routes = () => (
  <React.Fragment>
    {routeComponentMap.map(page => (
      <Route key={page.component} exact path={page.route} component={page.component} />
    ))}
  </React.Fragment>
);

export default Routes;
