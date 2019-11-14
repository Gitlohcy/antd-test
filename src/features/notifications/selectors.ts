import { Store } from './types';
import { IRootState } from '@/infrastructure/rootState';

const $ = <T>(selector: (state:Store) => T) => (rootState:IRootState) => selector(rootState.not);

const placeholder = $(state => state.jsonPlaceholder) 
const isDataFetching_placeholder = $(state => state.loading.placeholder === 'REQUEST')
const notification = $(state => state.notification);
const isDataFetching_notification = $(state => state.loading.notification === 'REQUEST')

const notSelectors = {
    placeholder,
    isDataFetching_placeholder,
    notification,
    isDataFetching_notification,
}

export default notSelectors;