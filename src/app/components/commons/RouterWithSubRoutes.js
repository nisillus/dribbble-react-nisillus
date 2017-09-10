import React from 'react';
import { Route } from 'react-router-dom';

import MainContent from './MainContent';

const RouterWithSubRoutes = (route) => (
  <Route exact={ route.exact } path={ route.path } render={ props => (
    <div>
      <route.component.header { ...props } basename={ route.path } routes={ route.childs } categories={ route.categories } showCategoriesMenu={ route.showCategoriesMenu } />
      <MainContent>
        <route.component.content { ...props } basename={ route.path } routes={ route.childs } />
      </MainContent>
    </div>
  ) } />
);

export default RouterWithSubRoutes;