import axios from 'axios';
import AuthService from '../services/authService';

const getClientAxios = () => {
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
    constructor() {
        this.client = getClientAxios();
    }

    get(url, conf = {}) {
        return this.client
            .get(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    delete(url, conf = {}) {
        return this.client
            .delete(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    head(url, conf = {}) {
        return this.client
            .head(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    options(url, conf = {}) {
        return this.client
            .options(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    post(url, data = {}, conf = {}) {
        return this.client
            .post(url, data, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    put(url, data = {}, conf = {}) {
        return this.client
            .put(url, data, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    patch(url, data = {}, conf = {}) {
        return this.client
            .patch(url, data, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }
}
