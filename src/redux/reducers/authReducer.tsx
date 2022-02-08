import { Reducer } from 'redux';
import { AuthActions } from '../actions/auth/authActionsInterfaces';
import * as types from '../constants';

export interface AuthReducerState {
    error: boolean;
    errorMessage: string;
    success: boolean;
}

const defaultState: AuthReducerState = {
    error: false,
    errorMessage: '',
    success: false
};

export const authReducer: Reducer<AuthReducerState, AuthActions> = (state = defaultState, action: AuthActions) => {
    switch (action.type) {
        case types.AUTH_USER_SUCCESSFUL:
            return {
                ...state,
                success: action.payload
            };
        case types.AUTH_USER_RESET:
            return {
                ...state,
                success: false
            };
        case types.AUTH_USER_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: 'There was a problem with loginng in'
            };
        default:
            return state;
    }
};
