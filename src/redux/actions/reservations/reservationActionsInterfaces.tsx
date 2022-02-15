import { IOfferDto } from '../../../dtos/IOfferDto';
import { IReservationDto } from '../../../dtos/IReservationDto';
import * as types from '../../constants';

interface ReservationCreateAction {
    type: typeof types.RESERVATION_CREATE_SUCCESS;
    payload: IReservationDto;
}

export type ReservationActions = ReservationCreateAction;
