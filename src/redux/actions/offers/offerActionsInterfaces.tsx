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

interface OfferFetchMineSuccessAction {
    type: typeof types.OFFER_FETCH_MINE_SUCCESS;
    payload: IOfferDto[];
}

interface OfferRemoveSuccessAction {
    type: typeof types.OFFER_REMOVE_SUCCESS;
    payload: string;
}

interface OfferUpdateSuccessAction {
    type: typeof types.OFFER_UPDATE_SUCCESS;
    payload: IOfferDto;
}

interface OfferCreateSuccessAction {
    type: typeof types.OFFER_CREATE_SUCCESS;
    payload: IOfferDto;
}

export type OfferActions =
    | OfferFetchAllSuccessAction
    | OfferFetchOneSuccessAction
    | OfferFetchMineSuccessAction
    | OfferRemoveSuccessAction
    | OfferUpdateSuccessAction
    | OfferCreateSuccessAction;
