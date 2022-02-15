import { Reducer } from 'redux';
import { IReservationDto } from '../../dtos/IReservationDto';
import { ReservationActions } from '../actions/reservations/reservationActionsInterfaces';
import * as types from '../constants';

export interface ReservationReducerState {
    reservation: IReservationDto;
}

const defaultState: ReservationReducerState = {
    reservation: { id: '', createdAt: '', status: 0, totalPrice: 0 }
};

export const reservationReducer: Reducer<ReservationReducerState, ReservationActions> = (
    state = defaultState,
    action: ReservationActions
) => {
    switch (action.type) {
        case types.RESERVATION_CREATE_SUCCESS:
            return {
                ...state,
                reservation: action.payload
            };
        default:
            return state;
    }
};
