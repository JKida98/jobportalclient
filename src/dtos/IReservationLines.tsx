import { IOfferDto } from './IOfferDto';
import { IReservationDto } from './IReservationDto';
import { IUserDisplayDto } from './IUserDto';

export interface IReservationLineDto {
    id: string;
    createdAt: string;
    status: IReservationLineStatus;
    price: number;
    reservation: IReservationDto;
    offer: IOfferDto;
    buyer: IUserDisplayDto;
    buyerId: string;
    seller: IUserDisplayDto;
    sellerId: string;
}

export enum IReservationLineStatus {
    CREATED,
    ACCEPTED,
    INPROGRESS,
    FINISHED,
    PAID
}
