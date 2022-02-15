import { Reducer } from 'redux';
import { IOfferDto } from '../../dtos/IOfferDto';
import { CardActions } from '../actions/card/cardActionsInterfaces';
import * as types from '../constants';

export interface CardReducerState {
    offers: IOfferDto[];
}

const defaultState: CardReducerState = {
    offers: []
};

export const cardReducer: Reducer<CardReducerState, CardActions> = (
    state = defaultState,
    action: CardActions
) => {
    switch (action.type) {
        case types.CARD_ADD_OFFER_SUCCESS:
            const listAfterAdding = [...state.offers, action.payload];
            return {
                ...state,
                offers: listAfterAdding
            };
        case types.CARD_REMOVE_OFFER_SUCCESS:
            const listAfterRemoving = state.offers.filter((x) => x.id !== action.payload);
            return {
                ...state,
                offers: listAfterRemoving
            };
        default:
            return state;
    }
};
