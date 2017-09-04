import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.scss';

import configureStore from './store-config';
import Routes from './routes-config';

import Dribbble from './containers/Dribbble';
import { RouterWithSubRoutes } from './components/commons/index';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  (
    <Provider store={ store }>
      <Router>
        <Dribbble>
          {
            Routes.map((route, index) => (
              <RouterWithSubRoutes key={ index } { ...route } />
            ))
          }
        </Dribbble>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
registerServiceWorker();
