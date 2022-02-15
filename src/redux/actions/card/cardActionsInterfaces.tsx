import { IOfferDto } from '../../../dtos/IOfferDto';
import * as types from '../../constants';

interface CardAddOfferAction {
    type: typeof types.CARD_ADD_OFFER_SUCCESS;
    payload: IOfferDto;
}

interface CardRemoveOfferAction {
    type: typeof types.CARD_REMOVE_OFFER_SUCCESS;
    payload: string;
}
export type CardActions = CardAddOfferAction | CardRemoveOfferAction;
