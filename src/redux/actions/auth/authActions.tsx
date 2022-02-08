import { Dispatch } from 'react';
import { Api } from '../../../api/api';
import AuthService from '../../../services/authService';
import * as types from '../../constants';
import { AuthActions } from './authActionsInterfaces';

export interface LoginFormValues {
    email: string;
    password: string;
}

export const login = (values: LoginFormValues) => {
    return (dispatch: Dispatch<AuthActions>) => {
        new Api().post('auth/login', values).then(
            (response) => {
                const token = response.data.token;
                new AuthService().setAuthToken(token);
                dispatch({ type: types.AUTH_USER_SUCCESSFUL, payload: true });
            },
            (error) => {
                const payload = error.response.data;
                dispatch({ type: types.AUTH_USER_ERROR, payload });
            }
        );
    };
};
