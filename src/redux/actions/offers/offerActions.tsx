import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { Api } from '../../../api/api';
import { IOfferDto, IOfferForCreation } from '../../../dtos/IOfferDto';
import * as types from '../../constants';
import * as jsonpatch from 'fast-json-patch';
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

export const getOfferWithoutSpinner = (id: string | undefined) => {
    return (dispatch: Dispatch<OfferActions | LoadingActions>) => {
        new Api().get(`offers/${id}`).then(
            (response: AxiosResponse<IOfferDto>) => {
                const payload = response.data;
                dispatch({ type: types.OFFER_FETCH_ONE_SUCCESS, payload });
            },
            (error) => {
                console.error(error);
            }
        );
    };
};

export const removeOffer = (id: string) => {
    return (dispatch: Dispatch<OfferActions | LoadingActions>) => {
        dispatch({ type: types.SHOW_SPINNER });
        new Api().delete(`offers/${id}`).then(
            () => {
                dispatch({ type: types.OFFER_REMOVE_SUCCESS, payload: id });
                dispatch({ type: types.HIDE_SPINNER });
            },
            (error) => {
                console.error(error);
                dispatch({ type: types.HIDE_SPINNER });
            }
        );
    };
};

export const updateOffer = (id: string, patch: jsonpatch.Operation[]) => {
    return (dispatch: Dispatch<OfferActions | LoadingActions>) => {
        dispatch({ type: types.SHOW_SPINNER });
        new Api().patch(`offers/${id}`, patch).then(
            (response) => {
                const offer = response.data;
                dispatch({ type: types.OFFER_UPDATE_SUCCESS, payload: offer });
                dispatch({ type: types.HIDE_SPINNER });
            },
            (error) => {
                console.error(error);
                dispatch({ type: types.HIDE_SPINNER });
            }
        );
    };
};

export const createOffer = (offer: IOfferForCreation) => {
    return (dispatch: Dispatch<OfferActions | LoadingActions>) => {
        dispatch({ type: types.SHOW_SPINNER });
        new Api().post(`offers`, offer).then(
            (response) => {
                const offer = response.data;
                dispatch({ type: types.OFFER_CREATE_SUCCESS, payload: offer });
                dispatch({ type: types.HIDE_SPINNER });
            },
            (error) => {
                console.error(error);
                dispatch({ type: types.HIDE_SPINNER });
            }
        );
    };
};
