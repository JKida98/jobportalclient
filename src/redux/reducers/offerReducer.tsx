import { Reducer } from 'redux';
import { IOfferDto } from '../../dtos/IOfferDto';
import { OfferActions } from '../actions/offers/offerActionsInterfaces';
import * as types from '../constants';

export interface OfferReducerState {
    offer: IOfferDto;
    offers: Array<IOfferDto>;
}

const defaultState: OfferReducerState = {
    offer: { id: '', title: '', description: '', hourlyPrice: 0 },
    offers: []
};

export const offerReducer: Reducer<OfferReducerState, OfferActions> = (state = defaultState, action: OfferActions) => {
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
        default:
            return state;
    }
};
