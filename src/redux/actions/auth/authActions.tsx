import { AxiosResponse } from 'axios';
import jwt_decode from 'jwt-decode';
import { Dispatch } from 'react';
import { Api } from '../../../api/api';
import AuthService from '../../../services/authService';
import * as types from '../../constants';
import { ErrorAction } from '../../reducers/errorReducer';
import { AuthActions } from './authActionsInterfaces';

export interface LoginFormValues {
    email: string;
    password: string;
}

export interface IToken {
    Id: string;
    email: string;
}

export const login = (values: LoginFormValues) => {
    return (dispatch: Dispatch<AuthActions | ErrorAction>) => {
        new Api().post('auth/login', values).then(
            (response: AxiosResponse) => {
                const token = response.data.token;
                const tokenDecoded = jwt_decode<IToken>(token);
                const authService = new AuthService();
                authService.setAuthToken(token);
                authService.setMyId(tokenDecoded.Id);
                dispatch({ type: types.AUTH_USER_SUCCESSFUL, payload: true });
            },
            () => {
                const payload = 'There was a problem with logging in. Try again.';
                dispatch({ type: types.ERROR, payload });
            }
        );
    };
};
