import produce from 'immer';
import { getType } from 'typesafe-actions';
import { AllActions } from '@/infrastructure/rootActions';
import * as notTypes from './types';
import * as notActions from './actions';
import { defaultState } from './defaults';

export default (state: notTypes.Store = defaultState, action: AllActions) =>
    produce (state, nextState => {
        switch (action.type) {

            //-----notification
            case getType(notActions.fetchNotificationAsync.request):
                
                nextState.loading.notification = 'REQUEST';
                    console.log('Loading-notification: ',nextState.loading.notification);
                break;

            case getType(notActions.fetchNotificationAsync.success):
                
                const notification = action.payload;
                nextState.notification = notification;
                    console.log('nextState.notitifcation: ',notification);
                nextState.loading.notification = 'SUCCESS';
                    console.log('Loading: ',nextState.loading.notification);
                break;
                
            case getType(notActions.fetchNotificationAsync.failure):
                nextState.loading.notification = 'FAILURE';
                break;

            //-------jsonPlaceholder    
            case getType(notActions.fetchPlaceholderAsync.request):
                
                nextState.loading.placeholder = 'REQUEST';
                    console.log('Loading-placeholder: ',nextState.loading.placeholder);
                break;

            case getType(notActions.fetchPlaceholderAsync.success):
                const placeholder = action.payload;
                console.log('placeholder: ',placeholder)

                nextState.jsonPlaceholder = placeholder;
                nextState.loading.placeholder = 'SUCCESS';

                console.log('SUCCESS');
                break;
            
            case getType(notActions.fetchPlaceholderAsync.failure):
                nextState.loading.placeholder = 'FAILURE';
                break;
                
                    
                // case getType(notActions.updateInfiniteArticles): {
                //     nextState.loading.placeholder = 'SUCCESS';
                //     nextState.placeholder = state.placeholder.concat(action.payload);
    
                //     console.log('SUCCESS')
                //     break;
                // }
        }
    });