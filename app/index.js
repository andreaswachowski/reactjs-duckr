import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import {createStore} from 'redux';
import users from 'redux/modules/users';
import {Provider} from 'react-redux';

const store = createStore(users, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
