import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';

import reducers from './reducers/index'; // Or wherever you keep your reducers

import Routes from './routes-config';

import Dribbble from './containers/Dribbble';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    RouterReducers: routerReducer
  }),
  applyMiddleware(thunk, middleware)
);

ReactDOM.render(
  (
    <Provider store={ store }>
      <ConnectedRouter history={history}>
        <Dribbble routesConfig={ Routes } />
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root')
);
registerServiceWorker();