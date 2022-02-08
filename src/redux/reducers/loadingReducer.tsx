import { Reducer } from 'redux';
import { LoadingActions } from '../actions/loading/loadingActionsInterfaces';
import * as types from '../constants';

export interface LoadingReducerState {
    loading: boolean;
}

const defaultState: LoadingReducerState = {
    loading: false
};

export const loadingReducer: Reducer<LoadingReducerState, LoadingActions> = (state = defaultState, action: LoadingActions) => {
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
