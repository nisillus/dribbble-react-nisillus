import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import Routes from './routes-config';
import Dribbble from './containers/Dribbble';
import { RouterWithSubRoutes } from './components/commons/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <Router>
      <Dribbble>
        {
          Routes.map((route, index) => (
            <RouterWithSubRoutes key={ index } { ...route } />
          ))
        }
      </Dribbble>
    </Router>
  ),
  document.getElementById('root')
);
registerServiceWorker();
