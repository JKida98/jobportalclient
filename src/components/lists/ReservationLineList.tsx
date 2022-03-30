import React from 'react';
import { FiPlusSquare, FiCheckSquare } from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { IReservationLineDto, IReservationLineStatus } from '../../dtos/IReservationLines';
import { reservationStatusFormat } from '../../helpers/statusFormatHelper';
import { changeReservationLineStatus } from '../../redux/actions/reservationLines/reservationLineActions';
import AuthService from '../../services/authService';
import './_lists.css';

interface IReservationLineListProps {
    list: IReservationLineDto[];
}

const ReservationLineList: React.FC<IReservationLineListProps> = ({ list }) => {
    const authService = new AuthService();
    const dispatch = useDispatch();

    const handleActionClicked = (id: string, status: IReservationLineStatus) => {
        dispatch(changeReservationLineStatus(id, status));
    };

    const renderStatusMananger = (reservationLine: IReservationLineDto) => {
        const id = reservationLine.id;
        const status = reservationLine.status;
        if (status === IReservationLineStatus.CREATED) {
            return <FiPlusSquare onClick={() => handleActionClicked(id, status)} />;
        } else if (status === IReservationLineStatus.ACCEPTED) {
            return <FiCheckSquare onClick={() => handleActionClicked(id, status)} />;
        } else if (status === IReservationLineStatus.INPROGRESS) {
            return <FiCheckSquare onClick={() => handleActionClicked(id, status)} />;
        } else if (status === IReservationLineStatus.FINISHED) {
            return <FiCheckSquare onClick={() => handleActionClicked(id, status)} />;
        }
    };

    const renderList = () => {
        return list?.map((x) => {
            const status = reservationStatusFormat(x.status);
            const isOwner = authService.getMyId() === x.sellerId;
            return (
                <Row className="rowAlignCenter mb-4" key={x.id}>
                    <Col xs="11">
                        <p className="listElementTitle">{x.offer.title}</p>
                        <p className="secondaryText">{status}</p>
                    </Col>

                    {isOwner && <Col xs="1">{renderStatusMananger(x)}</Col>}
                </Row>
            );
        });
    };

    return <>{renderList()}</>;
};

export default ReservationLineList;
