import React from 'react';
import { IReservationDto } from '../../dtos/IReservationDto';
import { basicDateTimeFormat } from '../../helpers/dateFormatHelper';
import { reservationStatusFormat } from '../../helpers/statusFormatHelper';
import './_lists.css';

interface IReservationListProps {
    list: IReservationDto[];
    action?: any;
}

const ReservationList: React.FC<IReservationListProps> = ({ list, action }) => {
    return (
        <>
            {list?.map((x) => {
                const status = reservationStatusFormat(x.status);
                const date = basicDateTimeFormat(x.createdAt);
                return (
                    <div className="listElement" key={x.id} onClick={() => action(x)}>
                        <p className="listElementTitle">
                            Total price: {x.totalPrice} [{date}]
                        </p>
                        <p className="secondaryText maxThreeLines">Status: {status}</p>
                    </div>
                );
            })}
        </>
    );
};

export default ReservationList;
