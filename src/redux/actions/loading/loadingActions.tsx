import { Dispatch } from 'react';
import * as types from '../../constants';
import { LoadingActions } from './loadingActionsInterfaces';

export const showSpinner = () => {
    return (dispatch: Dispatch<LoadingActions>) => {
        dispatch({ type: types.SHOW_SPINNER });
    };
};

export const hideSpinner = () => {
    return (dispatch: Dispatch<LoadingActions>) => {
        dispatch({ type: types.HIDE_SPINNER });
    };
};
