import { Dispatch } from 'redux';
import { IOfferDto } from '../../../dtos/IOfferDto';
import * as types from '../../constants';
import { CardActions } from './cardActionsInterfaces';

export const addOfferToCard = (offer: IOfferDto) => {
    return (dispatch: Dispatch<CardActions>) => {
        const payload = offer;
        dispatch({ type: types.ADD_OFFER_TO_CARD, payload });
    };
};

export const removeOfferFromCard = (id: string) => {
    return (dispatch: Dispatch<CardActions>) => {
        const payload = id;
        dispatch({ type: types.REMOVE_OFFER_FROM_CARD, payload });
    };
};
