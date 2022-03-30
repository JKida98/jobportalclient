import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { SimpleCard, TitleLessCard } from '../../components/cards/Cards';
import { addOfferToCard } from '../../redux/actions/card/cardActions';
import { getOffer } from '../../redux/actions/offers/offerActions';
import { AppState } from '../../redux/reducers';

type OfferOverviewParams = {
    offerId?: string;
};

const OfferOverview = () => {
    const { offerId } = useParams<OfferOverviewParams>();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const offer = useSelector((state: AppState) => state.offerReducer.offer);

    useEffect(() => {
        dispatch(getOffer(offerId));
    }, [dispatch, offerId]);

    const handleReserveClicked = () => {
        dispatch(addOfferToCard(offer));
        navigate('/card');
    };

    return (
        <Row>
            <Col>
                <SimpleCard title={offer.title} subtitle={offer.description}>
                    <p>Price: {offer.hourlyPrice}</p>
                </SimpleCard>
            </Col>
            <Col>
                <TitleLessCard>
                    <Button color="primary" onClick={handleReserveClicked}>
                        Reserve
                    </Button>
                </TitleLessCard>
            </Col>
        </Row>
    );
};

export default OfferOverview;
