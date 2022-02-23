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
        default:
            return state;
    }
};
