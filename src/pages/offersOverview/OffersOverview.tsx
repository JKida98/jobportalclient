import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import ActionOfferList from '../../components/lists/ActionOfferList';
import { getMyOffers } from '../../redux/actions/offers/offerActions';
import { AppState } from '../../redux/reducers';

const OffersOverview = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myOffers = useSelector((state: AppState) => state.offerReducer.myOffers);

    useEffect(() => {
        dispatch(getMyOffers());
    }, [dispatch]);

    const handleOfferClicked = (offer: any) => {
        navigate(`/offer/${offer.id}`);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <SimpleCard title="Offers overview" subtitle="In this view you manage your offers">
                        <ActionOfferList list={myOffers} action={handleOfferClicked} />
                    </SimpleCard>
                </Col>
            </Row>
        </Container>
    );
};

export default OffersOverview;
