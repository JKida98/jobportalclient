export const reservationStatusFormat = (status: number) => {
    switch (status) {
        case 0:
            return 'Created';
        case 1:
            return 'Accepted';
        case 2:
            return 'In progress';
        case 3:
            return 'Finished';
        case 4:
            return 'Paid';
    }
};
