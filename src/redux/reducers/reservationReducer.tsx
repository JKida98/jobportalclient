import { Reducer } from 'redux';
import { IReservationDto } from '../../dtos/IReservationDto';
import { ReservationActions } from '../actions/reservations/reservationActionsInterfaces';
import * as types from '../constants';

export interface ReservationReducerState {
    reservation?: IReservationDto;
    boughtReservations: IReservationDto[];
    soldReservations: IReservationDto[];
}

const defaultState: ReservationReducerState = {
    reservation: { id: '', createdAt: '', status: 0, totalPrice: 0 },
    boughtReservations: [],
    soldReservations: []
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
        case types.RESERVATION_FETCH_BOUGHT_SUCCESS:
            return {
                ...state,
                boughtReservations: action.payload
            };
        case types.RESERVATION_FETCH_SOLD_SUCCESS:
            return {
                ...state,
                soldReservations: action.payload
            };
        case types.RESERVATION_SELECT_SUCCESS:
            const found = state.boughtReservations.find((x) => x.id === action.payload);
            if (found !== undefined) {
                return {
                    ...state,
                    reservation: found
                };
            } else {
                const sold = state.soldReservations.find((x) => x.id === action.payload);
                return {
                    ...state,
                    reservation: sold
                };
            }
        default:
            return state;
    }
};
