import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'sanitize.css';
import './index.css';
import Routes from './routes';

ReactDOM.render(
  <Routes />,
  document.getElementById('root'),
);

serviceWorker.register();
