import { Reducer } from 'redux';
import { AuthActions } from '../actions/auth/authActionsInterfaces';
import * as types from '../constants';

export interface AuthReducerState {
    success: boolean;
}

const initState: AuthReducerState = {
    success: false
};

export const authReducer: Reducer<AuthReducerState, AuthActions> = (
    state = initState,
    action: AuthActions
) => {
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
        default:
            return state;
    }
};
