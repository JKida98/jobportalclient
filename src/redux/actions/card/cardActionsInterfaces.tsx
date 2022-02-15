import { IOfferDto } from '../../../dtos/IOfferDto';
import * as types from '../../constants';

interface AddOfferToCardAction {
    type: typeof types.ADD_OFFER_TO_CARD;
    payload: IOfferDto;
}

interface RemoveOfferFromCardAction {
    type: typeof types.REMOVE_OFFER_FROM_CARD;
    payload: string;
}

export type CardActions = AddOfferToCardAction | RemoveOfferFromCardAction;
