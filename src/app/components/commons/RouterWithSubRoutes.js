import React from 'react';
import { Route } from 'react-router-dom';

const RouterWithSubRoutes = (route) => (
  <Route exact={ route.exact } path={ route.path } render={ props => (
    <route.component { ...props } basename={ route.path } routes={ route.childs } />
  ) } />
);

export default RouterWithSubRoutes;