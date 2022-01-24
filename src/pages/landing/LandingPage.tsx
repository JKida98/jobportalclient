import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import OffersList from '../../components/lists/OfferList';
import { getOffers } from '../../redux/actions/offerActions';

const LandingPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const offers = useSelector((state: RootStateOrAny) => state.offer.offers);

    useEffect(() => {
        dispatch(getOffers());
    }, [dispatch]);

    const handleOfferClicked = (offer: any) => {
        navigate(`/offer/${offer.id}`);
    };

    return (
        <Container>
            <Row>
                <Col xs="6">
                    <SimpleCard title="Accepted offers" subtitle="These are accepted offers by you">
                        <OffersList list={offers} action={handleOfferClicked} />
                    </SimpleCard>
                </Col>
                <Col xs="6">
                    <SimpleCard title="Awaiting offers">
                        <OffersList list={offers} />
                    </SimpleCard>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage;
