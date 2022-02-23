import moment from 'moment';

export const basicDateFormat = (date: string) => {
    return moment(date).format('DD/MM/YYYY');
};

export const basicDateTimeFormat = (date: string) => {
    return moment(date).format('DD/MM/YYYY HH:mm');
};
