import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
//import createHistory from 'history/createBrowserHistory';
import createHistory from 'history/createHashHistory';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './createStore';
import * as serviceWorker from './serviceWorker';

const history = createHistory();

const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
