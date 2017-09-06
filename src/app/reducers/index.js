import { combineReducers } from 'redux';

import CategoryReducers from './categories';
import ProductReducers from './products';
import ProductDetailsReducers from './product-details';

export default combineReducers( { CategoryReducers, ProductReducers, ProductDetailsReducers } );