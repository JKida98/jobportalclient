import { Api } from '../../api/api';
import { LoginFormValues } from '../../interfaces';
import AuthService from '../../services/authService';
import * as types from '../constants';

export const login = (values: LoginFormValues) => {
    return (dispatch: any) => {
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
