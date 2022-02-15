import { Dispatch } from 'redux';
import { IOfferDto } from '../../../dtos/IOfferDto';
import * as types from '../../constants';
import { CardActions } from './cardActionsInterfaces';

export const addOfferToCard = (offer: IOfferDto) => {
    return (dispatch: Dispatch<CardActions>) => {
        const payload = offer;
        dispatch({ type: types.CARD_ADD_OFFER_SUCCESS, payload });
    };
};

export const removeOfferFromCard = (id: string) => {
    return (dispatch: Dispatch<CardActions>) => {
        const payload = id;
        dispatch({ type: types.CARD_REMOVE_OFFER_SUCCESS, payload });
    };
};
