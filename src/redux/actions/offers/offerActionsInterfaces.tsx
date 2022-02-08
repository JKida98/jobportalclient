import { IOfferDto } from '../../../dtos/IOfferDto';
import * as types from '../../constants';

interface OfferFetchAllSuccessAction {
    type: typeof types.OFFER_FETCH_ALL_SUCCESS;
    payload: IOfferDto[];
}

interface OfferFetchOneSuccessAction {
    type: typeof types.OFFER_FETCH_ONE_SUCCESS;
    payload: IOfferDto;
}

export type OfferActions = OfferFetchAllSuccessAction | OfferFetchOneSuccessAction;
