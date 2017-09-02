import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Dribbble from './containers/Dribbble';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dribbble />, document.getElementById('root'));
registerServiceWorker();
