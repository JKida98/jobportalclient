import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import { getOffer } from '../../redux/actions/offers/offerActions';
import { AppState } from '../../redux/reducers';

type OfferOverviewParams = {
    offerId?: string;
};

const OfferOverview: React.FC = () => {
    const { offerId } = useParams<OfferOverviewParams>();

    const dispatch = useDispatch();

    const offer = useSelector((state: AppState) => state.offerReducer.offer);

    useEffect(() => {
        dispatch(getOffer(offerId));
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <SimpleCard title={offer.title} subtitle={offer.description}>
                        <p>Price: {offer.hourlyPrice}</p>
                    </SimpleCard>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default OfferOverview;
