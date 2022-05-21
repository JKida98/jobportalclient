import { Reducer } from 'redux';
import * as types from '../constants';

export interface ErrorAction {
    type: typeof types.ERROR;
    payload: string;
}

export interface ErrorReducerState {
    error: string | undefined;
}

const defaultState: ErrorReducerState = {
    error: undefined
};

export const errorReducer: Reducer<ErrorReducerState, ErrorAction> = (
    state = defaultState,
    action: ErrorAction
) => {
    switch (action.type) {
        case types.ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
