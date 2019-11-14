import { call, put } from 'redux-saga/effects';
import * as notTypes from './types';
// import * as resActions from './actions';
import { Error, ExecQueryData, ExecQueryPlace } from '@/utils/api';
import { notActions } from '@/features/notifications';
// import { AllActions } from '@/infrastucture/rootAction'

//-----fetch status-Notification
export const fetchNotificationData = (action: any): Promise<notTypes.INotification | Error> => {
    const url = `/status-notification`;
    return ExecQueryData(url);
};

export function* fetchNotificationDataAsync(action: any) {
    // const fetchType = action.payload as notTypes.ArticleFetchType;
    try {
        const result: notTypes.INotification = yield call(fetchNotificationData, action);

        if(!result) {
            yield put(notActions.fetchNotificationAsync.failure());
        } else {
            yield put(notActions.fetchNotificationAsync.success(result));
            console.log('result:',result);
        }
    } catch (err) {
        yield put(notActions.fetchNotificationAsync.failure());
    }
}

//------fetch jsonPlaceholder
export const fetchPlaceholderData = (action: any): Promise<notTypes.jsonPlaceholder | Error> => {
    const url = `/1`;
    return ExecQueryPlace(url);
};

export function* fetchPlaceholderDataAsync(action: any) {
    // const fetchType = action.payload as notTypes.ArticleFetchType;
    try {
        const result: notTypes.jsonPlaceholder = yield call(fetchPlaceholderData, action);

        if(!result) {
            yield put(notActions.fetchPlaceholderAsync.failure());
        } else {
            yield put(notActions.fetchPlaceholderAsync.success(result));
            console.log('result',result)
        }
    } catch (err) {
        yield put(notActions.fetchPlaceholderAsync.failure());
    }
}