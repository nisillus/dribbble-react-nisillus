import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductDetails from './ProductDetails';

const ProductList = ({ match }) => (
  // <div className="Product-list">
    <Switch>
      <Route exact path={ match.url } render={ props => (
        <Redirect to={ `${ match.url }/aaaa` } />
      ) } />
      <Route path={ `${ match.url }/:productId` } component={ ProductDetails } />
    </Switch>
  // </div>
);

export default ProductList;