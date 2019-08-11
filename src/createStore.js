import {
    createStore as reduxCreateStore,
    applyMiddleware
  } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export default function createStore(history) {
    return reduxCreateStore(
        createRootReducer(history),
        applyMiddleware(
            logger,
            thunk,
            routerMiddleware(history)
        )
    );
}