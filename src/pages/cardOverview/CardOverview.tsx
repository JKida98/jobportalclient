import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import RemoveOfferList from '../../components/lists/RemoveOfferList';
import { removeOfferFromCard } from '../../redux/actions/card/cardActions';
import { AppState } from '../../redux/reducers';

const CardOverview = () => {
    const dispatch = useDispatch();

    const cardOffers = useSelector((state: AppState) => state.cardReducer.offers);
    const handleRemoveClicked = (id: string) => {
        dispatch(removeOfferFromCard(id));
    };
    return (
        <Container>
            <Row>
                <Col>
                    <SimpleCard title="Your items">
                        <RemoveOfferList list={cardOffers} removeAction={handleRemoveClicked} />
                    </SimpleCard>
                </Col>
            </Row>
        </Container>
    );
};

export default CardOverview;
