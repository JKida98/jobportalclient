import { Reducer } from 'redux';
import { IOfferDto } from '../../dtos/IOfferDto';
import { OfferActions } from '../actions/offers/offerActionsInterfaces';
import * as types from '../constants';

export interface OfferReducerState {
    offer: IOfferDto;
    myOffers: Array<IOfferDto>;
    offers: Array<IOfferDto>;
}

const defaultState: OfferReducerState = {
    offer: { id: '', title: '', description: '', hourlyPrice: 0, userId: '' },
    myOffers: [],
    offers: []
};

export const offerReducer: Reducer<OfferReducerState, OfferActions> = (
    state = defaultState,
    action: OfferActions
) => {
    switch (action.type) {
        case types.OFFER_FETCH_ALL_SUCCESS:
            return {
                ...state,
                offers: action.payload
            };
        case types.OFFER_FETCH_ONE_SUCCESS:
            return {
                ...state,
                offer: action.payload
            };
        case types.OFFER_FETCH_MINE_SUCCESS:
            return {
                ...state,
                myOffers: action.payload
            };
        case types.OFFER_REMOVE_SUCCESS:
            const listAfterDelete = state.myOffers.filter((x) => x.id !== action.payload);
            return {
                ...state,
                myOffers: listAfterDelete
            };
        case types.OFFER_UPDATE_SUCCESS:
            const listAfterUpdate = state.myOffers.map((x) => {
                if (x.id === action.payload.id) {
                    return action.payload;
                }
                return x;
            });
            return {
                ...state,
                myOffers: listAfterUpdate
            };
        case types.OFFER_CREATE_SUCCESS:
            const listAfterCreation = [...state.myOffers, action.payload];
            return {
                ...state,
                myOffers: listAfterCreation
            };
        default:
            return state;
    }
};
