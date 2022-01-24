import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import { IOfferDto, OfferState } from '../../interfaces';
import { getOffer } from '../../redux/actions/offerActions';

const OfferOverview: React.FC = () => {
    const { offerId } = useParams();

    const dispatch = useDispatch();

    const offerState = (state: OfferState) => state.offer;
    const offer = useSelector(offerState);
    // const offer = useSelector((state: OfferState) => state.offerReducer.);

    useEffect(() => {
        console.log('here');
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
