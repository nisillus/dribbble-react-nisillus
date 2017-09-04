import { createStore, applyMiddleware } from  'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const configureStore = () => {
  let middlewares = [thunk];
  let store = createStore(reducers, applyMiddleware(...middlewares));

  return store;
}

export default configureStore;