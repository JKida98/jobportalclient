import axios, { AxiosError, AxiosResponse, AxiosStatic } from 'axios';
import AuthService from '../services/authService';
import { AxiosInstance } from 'axios';

const getClientAxios = (): AxiosInstance => {
    const options = {
        baseURL: 'https://localhost:7087',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            Authorization: 'Bearer ' + new AuthService().getAuthToken()
        }
    };
    const clientAxios = axios.create(options);
    return clientAxios;
};

export class Api {
    client: AxiosInstance;

    constructor() {
        this.client = getClientAxios();
    }

    get(url: string, conf = {}) {
        return this.client
            .get(url, conf)
            .then((response: AxiosResponse) => Promise.resolve(response))
            .catch((error: AxiosError) => Promise.reject(error));
    }

    delete(url: string, conf = {}) {
        return this.client
            .delete(url, conf)
            .then((response: AxiosResponse) => Promise.resolve(response))
            .catch((error: AxiosError) => Promise.reject(error));
    }

    options(url: string, conf = {}) {
        return this.client
            .options(url, conf)
            .then((response: AxiosResponse) => Promise.resolve(response))
            .catch((error: AxiosError) => Promise.reject(error));
    }

    post(url: string, data = {}, conf = {}) {
        return this.client
            .post(url, data, conf)
            .then((response: AxiosResponse) => Promise.resolve(response))
            .catch((error: AxiosError) => Promise.reject(error));
    }

    put(url: string, data = {}, conf = {}) {
        return this.client
            .put(url, data, conf)
            .then((response: AxiosResponse) => Promise.resolve(response))
            .catch((error: AxiosError) => Promise.reject(error));
    }

    patch(url: string, data = {}, conf = {}) {
        return this.client
            .patch(url, data, conf)
            .then((response: AxiosResponse) => Promise.resolve(response))
            .catch((error: AxiosError) => Promise.reject(error));
    }
}
