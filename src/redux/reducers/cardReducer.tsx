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
        case types.ADD_OFFER_TO_CARD:
            const listAfterAdding = [...state.offers, action.payload];
            return {
                ...state,
                offers: listAfterAdding
            };
        case types.REMOVE_OFFER_FROM_CARD:
            const listAfterRemoving = state.offers.filter((x) => x.id !== action.payload);
            return {
                ...state,
                offers: listAfterRemoving
            };
        default:
            return state;
    }
};
