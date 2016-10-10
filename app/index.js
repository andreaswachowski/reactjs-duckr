import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import {createStore, applyMiddleware, compose} from 'redux';
import users from 'redux/modules/users';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(users, undefined, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
