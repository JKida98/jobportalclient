import { Reducer } from 'redux';
import { IReservationLineDto } from '../../dtos/IReservationLines';
import { ReservationLinesActions } from '../actions/reservationLines/reservationLineInterfaces';
import * as types from '../constants';

export interface ReservationLineReducerState {
    reservationLines: IReservationLineDto[];
}

const defaultState: ReservationLineReducerState = {
    reservationLines: []
};

export const reservationLineReducer: Reducer<
    ReservationLineReducerState,
    ReservationLinesActions
> = (state = defaultState, action: ReservationLinesActions) => {
    switch (action.type) {
        case types.RESERVATION_LINES_FETCH_SUCCESS:
            return {
                ...state,
                reservationLines: action.payload
            };
        case types.RESERVATION_LINES_CHANGE_STATUS_SUCCESS:
            const reservationLines = state.reservationLines.map((x) =>
                x.id === action.payload.id ? action.payload : x
            );
            return {
                ...state,
                reservationLines
            };
        default:
            return state;
    }
};
