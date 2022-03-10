import { IReservationLineDto } from '../../../dtos/IReservationLines';
import * as types from '../../constants';

interface ReservationLinesFetchAction {
    type: typeof types.RESERVATION_LINES_FETCH_SUCCESS;
    payload: IReservationLineDto[];
}

interface ReservationLinesChangeStatusAction {
    type: typeof types.RESERVATION_LINES_CHANGE_STATUS_SUCCESS;
    payload: IReservationLineDto;
}

export type ReservationLinesActions =
    | ReservationLinesFetchAction
    | ReservationLinesChangeStatusAction;
