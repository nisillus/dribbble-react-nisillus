import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CategoryDetails from './CategoryDetails';

const ProductCategory = ({ match }) => (
  // <div className="Product-category">
    <Switch>
      <Route exact path={ match.url } render={ props => (
        <Redirect to={ `${match.url}/shoes` } />
      ) } />
      <Route path={`${match.url}/:cateCode`} component={ CategoryDetails }/>
    </Switch>
  // </div>
);

export default ProductCategory;