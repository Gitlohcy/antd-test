import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, Store} from 'redux';

import createReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { IRootState } from './rootState';
import { notActions } from '@/features';

export const history = createBrowserHistory();

function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    let middleware = applyMiddleware(sagaMiddleware , routerMiddleware(history));

    const store = createStore(createReducer(history), middleware) as Store<IRootState>;

    sagaMiddleware.run(rootSaga);
    initialDispatch(store);
    return store;
}

async function initialDispatch(store:Store) {
    const dispatch = (action:any) => store.dispatch(action);
    dispatch(notActions.fetchNotificationAsync.request());
}

const store = configureStore();

export default store;
