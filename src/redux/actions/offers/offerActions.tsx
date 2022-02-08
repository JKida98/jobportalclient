import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { Api } from '../../../api/api';
import { IOfferDto } from '../../../dtos/IOfferDto';
import * as types from '../../constants';
import { LoadingActions } from '../loading/loadingActionsInterfaces';
import { OfferActions } from './offerActionsInterfaces';

export const getOffers = () => {
    return (dispatch: Dispatch<OfferActions | LoadingActions>) => {
        dispatch({ type: types.SHOW_SPINNER });
        new Api().get('offers').then(
            (response: AxiosResponse<IOfferDto[]>) => {
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

export const getMyOffers = () => {
    return (dispatch: Dispatch<OfferActions | LoadingActions>) => {
        dispatch({ type: types.SHOW_SPINNER });
        new Api().get('my/offers').then(
            (response: AxiosResponse<IOfferDto[]>) => {
                const payload = response.data;
                dispatch({ type: types.OFFER_FETCH_MINE_SUCCESS, payload });
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
    return (dispatch: Dispatch<OfferActions | LoadingActions>) => {
        dispatch({ type: types.SHOW_SPINNER });
        new Api().get(`offers/${id}`).then(
            (response: AxiosResponse<IOfferDto>) => {
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
