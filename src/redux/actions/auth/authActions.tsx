import { Dispatch } from 'react';
import jwt_decode from 'jwt-decode';
import { Api } from '../../../api/api';
import AuthService from '../../../services/authService';
import * as types from '../../constants';
import { AuthActions } from './authActionsInterfaces';
import { AxiosError, AxiosResponse } from 'axios';

export interface LoginFormValues {
    email: string;
    password: string;
}

export interface IToken {
    Id: string;
    email: string;
}

export const login = (values: LoginFormValues) => {
    return (dispatch: Dispatch<AuthActions>) => {
        new Api().post('auth/login', values).then(
            (response: AxiosResponse) => {
                const token = response.data.token;
                const tokenDecoded = jwt_decode<IToken>(token);
                const authService = new AuthService();
                authService.setAuthToken(token);
                authService.setMyId(tokenDecoded.Id);
                dispatch({ type: types.AUTH_USER_SUCCESSFUL, payload: true });
            },
            (error: AxiosError) => {
                const payload = error.response?.data;
                dispatch({ type: types.AUTH_USER_ERROR, payload });
            }
        );
    };
};
