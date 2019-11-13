import { all, call, spawn, takeLatest } from 'redux-saga/effects';
import {ActionList} from './rootActions';
import {notApis} from '@/features';

export function* queriesSagas() {
    yield all([
        takeLatest(ActionList.NOTIFICATION_LIST_ASYNC_REQUEST, notApis.fetchNotificationDataAsync),
    ]);
}

const rootSagas = [queriesSagas].map(makeRestartable);

function makeRestartable(saga: any) {
    return function*() {
        yield spawn(function*() {
            while (true) {
                try {
                    yield call(saga);
                    console.error('Termination erro. Root sagas are supposed to live for whole app lifetime!', saga);
                } catch (e) {
                    console.error('Saga error, the saga will be restarted', e);
                }
                //yield delay?
            }
        })
    }
}

export default function* rootSaga() {
    yield all(rootSagas.map(saga => call(saga)));
}