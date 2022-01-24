import { combineReducers } from 'redux';
import auth from './authReducer';
import offerReducer from './offerReducer';
import loading from './loadingReducer';

export const reducers = combineReducers({ auth, offerReducer, loading });

const rootReducer = (state: any, action: any) => {
    return reducers(state, action);
};

export default rootReducer;
