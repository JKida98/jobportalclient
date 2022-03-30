import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import OffersList from '../../components/lists/OfferList';
import ReservationList from '../../components/lists/ReservationList';
import { IOfferDto } from '../../dtos/IOfferDto';
import { IReservationDto } from '../../dtos/IReservationDto';
import { getOffers } from '../../redux/actions/offers/offerActions';
import {
    getMyBoughtReservations,
    getMySoldReservations
} from '../../redux/actions/reservations/reservationActions';
import { AppState } from '../../redux/reducers';
import AuthService from '../../services/authService';

const LandingPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authService = new AuthService();

    const offers = useSelector((state: AppState) => state.offerReducer.offers);
    const boughtReservations = useSelector(
        (state: AppState) => state.reservationReducer.boughtReservations
    );
    const soldReservations = useSelector(
        (state: AppState) => state.reservationReducer.soldReservations
    );

    useEffect(() => {
        dispatch(getOffers());
        dispatch(getMyBoughtReservations());
        dispatch(getMySoldReservations());
    }, [dispatch]);

    const handleOfferClicked = (offer: IOfferDto) => {
        if (offer.userId === authService.getMyId()) {
            return;
        }
        navigate(`/offer/${offer.id}`);
    };

    const handleReservationClicked = (reservation: IReservationDto) => {
        navigate(`/reservation/${reservation.id}`);
    };

    return (
        <>
            <Row>
                <Col xs="6">
                    <SimpleCard title="Bought reservations">
                        <ReservationList
                            list={boughtReservations}
                            action={handleReservationClicked}
                        />
                    </SimpleCard>
                </Col>
                <Col xs="6">
                    <SimpleCard title="Sold reservations">
                        <ReservationList
                            list={soldReservations}
                            action={handleReservationClicked}
                        />
                    </SimpleCard>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs="12">
                    <SimpleCard title="Recommended offers" subtitle="Click an offer and reserve it">
                        <OffersList list={offers} action={handleOfferClicked} />
                    </SimpleCard>
                </Col>
            </Row>
        </>
    );
};

export default LandingPage;
