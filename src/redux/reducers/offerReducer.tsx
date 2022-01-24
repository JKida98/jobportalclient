import { OfferState } from '../../interfaces';
import * as types from '../constants';

const INITIAL_STATE: OfferState = {
    offer: { title: '', description: '', hourlyPrice: 0 },
    offers: []
};

var offerReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case types.OFFER_FETCH_ALL_SUCCESS:
            return {
                ...state,
                offers: action.payload
            };
        case types.OFFER_FETCH_ONE_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                offer: action.payload
            };
        default:
            return state;
    }
};

export default offerReducer;
