import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { browserHistory } from 'react-router';

import Routes from './routes';

import { Provider } from 'react-redux';

import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
