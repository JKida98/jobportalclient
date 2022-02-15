import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import OffersList from '../../components/lists/OfferList';
import { IOfferDto } from '../../dtos/IOfferDto';
import { getMyOffers, getOffers } from '../../redux/actions/offers/offerActions';
import { AppState } from '../../redux/reducers';
import AuthService from '../../services/authService';

const LandingPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authService = new AuthService();

    const offers = useSelector((state: AppState) => state.offerReducer.offers);
    const myOffers = useSelector((state: AppState) => state.offerReducer.myOffers);

    useEffect(() => {
        dispatch(getOffers());
        dispatch(getMyOffers());
    }, [dispatch]);

    const handleOfferClicked = (offer: IOfferDto) => {
        if (offer.userId === authService.getMyId()) {
            return;
        }
        navigate(`/offer/${offer.id}`);
    };

    return (
        <Container>
            <Row>
                <Col xs="6">
                    <SimpleCard title="Recommended offers" subtitle="Click an offer and reserve it">
                        <OffersList list={offers} action={handleOfferClicked} />
                    </SimpleCard>
                </Col>
                <Col xs="6">
                    <SimpleCard title="My offers">
                        <OffersList list={myOffers} action={handleOfferClicked} />
                    </SimpleCard>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage;
