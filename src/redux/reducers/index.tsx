import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { offerReducer } from './offerReducer';
import { loadingReducer } from './loadingReducer';
import { AuthActions } from '../actions/auth/authActionsInterfaces';

export const reducers = combineReducers({ authReducer, offerReducer, loadingReducer });

const rootReducer = (state: any, action: any) => {
    return reducers(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export type AppActions = AuthActions;

export default rootReducer;
