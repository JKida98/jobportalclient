export interface LoginFormValues {
    username: string;
    password: string;
}

export interface IOffer {
    id: string;
    title: string;
    description: string;
}

export interface IOffersList {
    list: Array<IOffer>;
    action?: any;
}

// reducers
export interface AuthState {
    error: boolean;
    success: boolean;
}

export interface IOfferDto {
    title: string;
    description: string;
    hourlyPrice: number;
}

export interface OfferState {
    offer: IOfferDto;
    offers: IOfferDto[];
}
