import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import CrudOfferList from '../../components/lists/CrudOfferList';
import { getMyOffers } from '../../redux/actions/offers/offerActions';
import { AppState } from '../../redux/reducers';

const OffersOverview = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myOffers = useSelector((state: AppState) => state.offerReducer.myOffers);

    useEffect(() => {
        dispatch(getMyOffers());
    }, [dispatch]);

    const handleOfferClicked = (offer: any): void => {
        navigate(`/offer/${offer.id}`);
    };

    return (
        <Row>
            <Col>
                <SimpleCard title="Offers overview" subtitle="In this view you manage your offers">
                    <CrudOfferList list={myOffers} action={handleOfferClicked} />
                </SimpleCard>
            </Col>
        </Row>
    );
};

export default OffersOverview;
