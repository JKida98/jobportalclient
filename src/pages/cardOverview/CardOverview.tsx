import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import RemoveOfferList from '../../components/lists/RemoveOfferList';
import { removeOfferFromCard } from '../../redux/actions/card/cardActions';
import { createReservation } from '../../redux/actions/reservations/reservationActions';
import { AppState } from '../../redux/reducers';

const CardOverview = () => {
    const dispatch = useDispatch();

    const cardOffers = useSelector((state: AppState) => state.cardReducer.offers);
    const handleRemoveClicked = (id: string) => {
        dispatch(removeOfferFromCard(id));
    };

    const handleCreatingOrder = () => {
        const offers = cardOffers.map((x) => {
            return {
                offerId: x.id
            };
        });
        dispatch(createReservation(offers));
    };

    const calculateTotal = () => {
        var total = 0;
        cardOffers.forEach((x) => (total += x.hourlyPrice));
        return total;
    };
    return (
        <Container>
            <Row>
                <Col>
                    <SimpleCard title="Your items">
                        <RemoveOfferList list={cardOffers} removeAction={handleRemoveClicked} />
                        <label>Total price: {calculateTotal()}</label>
                        <button onClick={handleCreatingOrder}>Create offer</button>
                    </SimpleCard>
                </Col>
            </Row>
        </Container>
    );
};

export default CardOverview;
