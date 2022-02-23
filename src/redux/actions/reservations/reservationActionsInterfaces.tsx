import { IOfferDto } from '../../../dtos/IOfferDto';
import { IReservationDto } from '../../../dtos/IReservationDto';
import * as types from '../../constants';

interface ReservationCreateAction {
    type: typeof types.RESERVATION_CREATE_SUCCESS;
    payload: IReservationDto;
}

interface ReservationFetchBoughtAction {
    type: typeof types.RESERVATION_FETCH_BOUGHT_SUCCESS;
    payload: IReservationDto[];
}

interface ReservationFetchSoldAction {
    type: typeof types.RESERVATION_FETCH_SOLD_SUCCESS;
    payload: IReservationDto[];
}

interface ReservationSelectAction {
    type: typeof types.RESERVATION_SELECT_SUCCESS;
    payload?: string;
}

export type ReservationActions =
    | ReservationCreateAction
    | ReservationFetchBoughtAction
    | ReservationFetchSoldAction
    | ReservationSelectAction;
