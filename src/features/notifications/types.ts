import {sharedTypes} from '@/features';

export interface jsonPlaceholder {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface LoadingStore {
    placeholder: sharedTypes.LoadingState;
    config: sharedTypes.LoadingState;
}

export interface Store{
    jsonPlaceholder: jsonPlaceholder;
    loading: LoadingStore;
}