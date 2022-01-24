import { Api } from '../../api/api';
import * as types from '../constants';

export const getOffers = () => {
    return (dispatch: any) => {
        dispatch({ type: types.SHOW_SPINNER });
        new Api().get('offers').then(
            (response) => {
                const payload = response.data;
                dispatch({ type: types.OFFER_FETCH_ALL_SUCCESS, payload });
                dispatch({ type: types.HIDE_SPINNER });
            },
            (error) => {
                console.error(error);
                dispatch({ type: types.HIDE_SPINNER });
            }
        );
    };
};

export const getOffer = (id: string | undefined) => {
    return (dispatch: any) => {
        dispatch({ type: types.SHOW_SPINNER });
        new Api().get(`offers/${id}`).then(
            (response) => {
                const payload = response.data;
                dispatch({ type: types.OFFER_FETCH_ONE_SUCCESS, payload });
                dispatch({ type: types.HIDE_SPINNER });
            },
            (error) => {
                console.error(error);
                dispatch({ type: types.HIDE_SPINNER });
            }
        );
    };
};
