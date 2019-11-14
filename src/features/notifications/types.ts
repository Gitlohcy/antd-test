import {sharedTypes} from '@/features';

export interface Store{
    jsonPlaceholder: jsonPlaceholder;
    loading: LoadingStore;
    notification: INotification;
}

export interface LoadingStore {
    placeholder: sharedTypes.LoadingState;
    config: sharedTypes.LoadingState;
    notification: sharedTypes.LoadingState;
}


//-------json-Placeholder
export interface jsonPlaceholder {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
//------


//----status-notification
export interface INotification {
    info: IDataCount,
    warning: IDataCount,
    alert: IDataCount,
    control: IDataCount
}

interface IDataCount {
    [index: number]: datas_or_tcount;
}

type datas_or_tcount = datas | tcount;

interface datas {
    [key:string]: data
}

interface data {
    color: string,
    exchange: string,
    companyName: string,
    price: number
    chg_pct: number
    date: string,
    Open: number,
    High: number,
    Low: number,
    Close: number,
    ticker: string,
    Detection: string[],
}

interface tcount {
    total_count: number;
}
//------