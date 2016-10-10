import ReactDOM from 'react-dom';
import routes from './config/routes';
import {createStore} from 'redux';
import users from 'redux/modules/users';

const store = createStore(users, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  routes,
  document.getElementById('app')
);
