import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import { addOfferToCard } from '../../redux/actions/card/cardActions';
import { getOffer } from '../../redux/actions/offers/offerActions';
import { AppState } from '../../redux/reducers';

type OfferOverviewParams = {
    offerId?: string;
};

const OfferOverview = () => {
    const { offerId } = useParams<OfferOverviewParams>();

    const dispatch = useDispatch();

    const offer = useSelector((state: AppState) => state.offerReducer.offer);

    useEffect(() => {
        dispatch(getOffer(offerId));
    }, [dispatch, offerId]);

    const handleReserveClicked = () => {
        dispatch(addOfferToCard(offer));
    };

    return (
        <Container>
            <Row>
                <Col>
                    <SimpleCard title={offer.title} subtitle={offer.description}>
                        <p>Price: {offer.hourlyPrice}</p>
                    </SimpleCard>
                </Col>
                <Col>
                    <SimpleCard title="What do you want to do with the offer?">
                        <button onClick={handleReserveClicked} className="actionButton">
                            Reserve
                        </button>
                    </SimpleCard>
                </Col>
            </Row>
        </Container>
    );
};

export default OfferOverview;
