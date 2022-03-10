import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { Api } from '../../../api/api';
import { IReservationLineDto, IReservationLineStatus } from '../../../dtos/IReservationLines';
import * as types from '../../constants';
import { LoadingActions } from '../loading/loadingActionsInterfaces';
import { ReservationLinesActions } from './reservationLineInterfaces';

export const getReservationLinesForReservation = (id?: string) => {
    return (dispatch: Dispatch<ReservationLinesActions | LoadingActions>) => {
        dispatch({ type: types.SHOW_SPINNER });
        new Api().get(`reservationLines/${id}`).then(
            (response: AxiosResponse<IReservationLineDto[]>) => {
                const payload = response.data;
                dispatch({ type: types.RESERVATION_LINES_FETCH_SUCCESS, payload });
                dispatch({ type: types.HIDE_SPINNER });
            },
            (error) => {
                console.error(error);
                dispatch({ type: types.HIDE_SPINNER });
            }
        );
    };
};

export const changeReservationLineStatus = (id: string, currentStatus: IReservationLineStatus) => {
    return (dispatch: Dispatch<ReservationLinesActions | LoadingActions>) => {
        dispatch({ type: types.SHOW_SPINNER });
        new Api().post(`reservationLines/${id}/status/${currentStatus}`).then(
            (response: AxiosResponse<IReservationLineDto>) => {
                const payload = response.data;
                dispatch({ type: types.RESERVATION_LINES_CHANGE_STATUS_SUCCESS, payload });
                dispatch({ type: types.HIDE_SPINNER });
            },
            (error) => {
                console.error(error);
                dispatch({ type: types.HIDE_SPINNER });
            }
        );
    };
};
