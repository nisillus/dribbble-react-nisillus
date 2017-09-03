import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.scss';
import Routes from './routes-config';
import Dribbble from './containers/Dribbble';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <Router>
      <Dribbble>
        {
          Routes.map((route, index) => (
            <Route exact={ route.exact } key={ index } path={ route.path } render={ props => (
              <route.component { ...props } basename={ route.path } routes={ route.childs } />
            ) } />
          ))
        }
      </Dribbble>
    </Router>
  ),
  document.getElementById('root')
);
registerServiceWorker();
