import { combineReducers } from 'redux';
import { cardReducer } from './cardReducer';
import { reservationReducer } from './reservationReducer';
import { authReducer } from './authReducer';
import { offerReducer } from './offerReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { reservationLineReducer } from './reservationLineReducer';
import { AuthActions } from '../actions/auth/authActionsInterfaces';

export const reducers = combineReducers({
    authReducer,
    offerReducer,
    errorReducer,
    loadingReducer,
    cardReducer,
    reservationReducer,
    reservationLineReducer
});

const rootReducer = (state: any, action: any) => {
    return reducers(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export type AppActions = AuthActions;

export default rootReducer;
