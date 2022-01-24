import { AuthState } from '../../interfaces';
import * as types from '../constants';

const INITIAL_STATE: AuthState = {
    success: false,
    error: false
};

var authReducer = (state = INITIAL_STATE, action: any) => {
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
                error: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;
