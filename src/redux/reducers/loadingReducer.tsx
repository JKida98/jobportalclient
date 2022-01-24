import * as types from '../constants';

const INITIAL_STATE = {
    loading: false
};

var loadingReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case types.SHOW_SPINNER:
            return {
                ...state,
                loading: true
            };
        case types.HIDE_SPINNER:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
};

export default loadingReducer;
