import { combineReducers } from 'redux';

import CategoryReducers from './categories';
import ProductReducers from './products';

export default combineReducers( { CategoryReducers, ProductReducers } );