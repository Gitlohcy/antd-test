import axios, { AxiosResponse } from 'axios';

type Methods = 'GET' | 'POST' | 'DELETE';

export type Error = {
    error: string;
};

export const placeholderURL =
    process.env.NODE_ENV === 'development'
        ? 'https://jsonplaceholder.typicode.com/todos'
        : process.env.REACT_APP_BASE_URL;

export const ExecQueryPlace = async <R, P = any>(url: string, method: Methods = 'GET', data?: P) => {
    const fullURL = placeholderURL + url;
    try {
        const response: AxiosResponse<R | Error> = await axios.get(fullURL)
        console.log(fullURL, response);
        return response.data;
    } catch (error) {
        console.error(`Error encountered when make ${method} call to ${fullURL}: ${error}`);
        return error.response.data;
    }

}

//----Notification
export const baseURL =
    process.env.NODE_ENV === 'development'
        ? 'http://0.0.0.0:5000/api'
        : process.env.REACT_APP_BASE_URL;

export const ExecQueryData = async <R, P = any>(url: string, method: Methods = 'GET', data?: P) => {
    const fullURL = baseURL + url;
    try {
        const response: AxiosResponse<R | Error> = await axios.get(fullURL)
        console.log(fullURL, response);
        console.log('response.data:',response.data)
        return response.data;
    } catch (error) {
        console.error(`Error encountered when make ${method} call to ${fullURL}: ${error}`);
        return error.response.data;
    }

}