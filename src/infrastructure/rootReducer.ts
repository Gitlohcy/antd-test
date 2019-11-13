import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { notReducer } from '@/features';

export default (history:History) => 
    combineReducers({
        router: connectRouter(history),
        not: notReducer
    })