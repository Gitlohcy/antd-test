import produce from 'immer';
import { getType } from 'typesafe-actions';
import { AllActions } from '@/infrastructure/rootActions';
import * as notTypes from './types';
import * as notActions from './actions';
import { defaultState } from './defaults';

export default (state: notTypes.Store = defaultState, action: AllActions) =>
    produce (state, nextState => {
        switch (action.type) {
            case getType(notActions.fetchNotificationAsync.request):
                nextState.loading.placeholder = 'REQUEST';

                console.log('REQUEST');
                break;

            case getType(notActions.fetchNotificationAsync.success):
                const placeholder = action.payload;
                console.log('placeholder: ',placeholder)

                nextState.jsonPlaceholder = placeholder;
                nextState.loading.placeholder = 'SUCCESS';

                console.log('SUCCESS');
                break;

            // case getType(notActions.updateInfiniteArticles): {
            //     nextState.loading.placeholder = 'SUCCESS';
            //     nextState.placeholder = state.placeholder.concat(action.payload);

            //     console.log('SUCCESS')
            //     break;
            // }

            case getType(notActions.fetchNotificationAsync.failure):
                nextState.loading.placeholder = 'FAILURE';
                break;

        }
    });