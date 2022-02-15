export interface IOfferDto {
    id: string;
    title: string;
    description: string;
    hourlyPrice: number;
    userId: string;
}

export interface IOfferForCreation {
    title: string;
    description: string;
    hourlyPrice: number;
}

export const initialOfferValues: IOfferForCreation = {
    title: '',
    description: '',
    hourlyPrice: 0
};
