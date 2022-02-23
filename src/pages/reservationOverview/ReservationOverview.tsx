import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import ReservationLineList from '../../components/lists/ReservationLineList';
import { getReservationLinesForReservation } from '../../redux/actions/reservationLines/reservationLineActions';
import { selectReservation } from '../../redux/actions/reservations/reservationActions';
import { AppState } from '../../redux/reducers';

type ReservationOverviewParams = {
    reservationId?: string;
};

const ReservationOverview = () => {
    const { reservationId } = useParams<ReservationOverviewParams>();

    const dispatch = useDispatch();

    const reservationLines = useSelector(
        (state: AppState) => state.reservationLineReducer.reservationLines
    );

    const reservation = useSelector((state: AppState) => state.reservationReducer.reservation);

    useEffect(() => {
        dispatch(selectReservation(reservationId));
        dispatch(getReservationLinesForReservation(reservationId));
    }, [dispatch, reservationId]);

    return (
        <Container>
            <Row>
                <Col>
                    <SimpleCard title={`RESERVATION Total price: ${reservation?.totalPrice}`}>
                        <ReservationLineList list={reservationLines} />
                    </SimpleCard>
                </Col>
            </Row>
        </Container>
    );
};

export default ReservationOverview;
