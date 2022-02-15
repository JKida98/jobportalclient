import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { Api } from '../../../api/api';
import { IReservationDto, IReservationLineForCreation } from '../../../dtos/IReservationDto';
import * as types from '../../constants';
import { LoadingActions } from '../loading/loadingActionsInterfaces';
import { ReservationActions } from './reservationActionsInterfaces';

export const createReservation = (ids: IReservationLineForCreation[]) => {
    return (dispatch: Dispatch<ReservationActions | LoadingActions>) => {
        dispatch({ type: types.SHOW_SPINNER });
        new Api().post('reservations', ids).then(
            (response: AxiosResponse<IReservationDto>) => {
                const payload = response.data;
                dispatch({ type: types.RESERVATION_CREATE_SUCCESS, payload });
                dispatch({ type: types.HIDE_SPINNER });
            },
            (error) => {
                console.error(error);
                dispatch({ type: types.HIDE_SPINNER });
            }
        );
    };
};
