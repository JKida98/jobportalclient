export interface IReservationDto {
    id: string;
    createdAt: string;
    status: number;
    totalPrice: number;
}

export interface IReservationLineForCreation {
    offerId: string;
}
