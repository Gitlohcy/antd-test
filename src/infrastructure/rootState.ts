import { notTypes } from '@/features';
import { RouterState } from 'connected-react-router';

export interface IRootState {
    not: notTypes.Store;
    router: RouterState;
}