import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import * as notTypes from './types';
import {ActionList} from '@/infrastructure/rootActions';

export const fetchNotificationAsync = createAsyncAction(
    ActionList.NOTIFICATION_LIST_ASYNC_REQUEST,
    ActionList.NOTIFICATION_LIST_ASYNC_SUCCESS,
    ActionList.NOTIFICATION_LIST_ASYNC_FAILURE
)<undefined, notTypes.INotification, void>();

export const updateInfiniteArticles = createStandardAction(ActionList.NOTIFICATION_UPDATE_INFINITE_NOTIFICATION)<notTypes.jsonPlaceholder>();

export const fetchConfigAysnc = createAsyncAction(
    ActionList.NOTIFICATION_CONFIG_ASYNC_REQUEST,
    ActionList.NOTIFICATION_CONFIG_ASYNC_SUCCESS,
    ActionList.NOTIFICATION_CONFIG_ASYNC_FAILURE,
)<void, string[], void>();


export const fetchPlaceholderAsync = createAsyncAction(
    ActionList.PLACEHOLDER_ASYNC_REQUEST,
    ActionList.PLACEHOLDER_ASYNC_SUCCESS,
    ActionList.PLACEHOLDER_ASYNC_FAILURE
)<undefined, notTypes.jsonPlaceholder, void>();