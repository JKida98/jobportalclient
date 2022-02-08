import * as types from '../../constants';

interface AuthSuccessfulAction {
    type: typeof types.AUTH_USER_SUCCESSFUL;
    payload: boolean;
}

interface AuthUserReset {
    type: typeof types.AUTH_USER_RESET;
}

interface AuthUserError {
    type: typeof types.AUTH_USER_ERROR;
    payload: string;
}

export type AuthActions = AuthSuccessfulAction | AuthUserReset | AuthUserError;
