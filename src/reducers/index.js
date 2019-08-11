import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import shopping from './shopping';
import Ranking from './Ranking'

export default (history) => combineReducers({
    router: connectRouter(history),
    shopping,
    Ranking
})