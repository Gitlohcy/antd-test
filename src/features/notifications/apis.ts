import { call, put } from 'redux-saga/effects';
import * as notTypes from './types';
// import * as resActions from './actions';
import { Error, ExecQueryData } from '@/utils/api';
import { notActions } from '.';
// import { AllActions } from '@/infrastucture/rootAction'

export const fetchNotificationData = (action: any): Promise<notTypes.jsonPlaceholder | Error> => {
    const url = `/article-list`;
    return ExecQueryData(url);
};

export function* fetchNotificationDataAsync(action: any) {
    // const fetchType = action.payload as notTypes.ArticleFetchType;
    try {
        const result: notTypes.jsonPlaceholder = yield call(fetchNotificationData, action);

        if(!result) {
            yield put(notActions.fetchNotificationAsync.failure());
        } else {
            console.log(result);
            yield put(notActions.fetchNotificationAsync.success(result));
        }
    } catch (err) {
        yield put(notActions.fetchNotificationAsync.failure());
    }
}