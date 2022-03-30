import React from 'react';
import { IOfferDto } from '../../dtos/IOfferDto';
import './_lists.css';

interface IOffersListProps {
    list: IOfferDto[];
    action?: any;
}

const OffersList: React.FC<IOffersListProps> = ({ list, action }) => {
    return (
        <>
            {list?.map((x) => {
                return (
                    <div className="listElement" key={x.id} onClick={() => action(x)}>
                        <p className="listElementTitle">{x.title}</p>
                        <p className="secondaryText maxThreeLines">{x.description}</p>
                    </div>
                );
            })}
        </>
    );
};

export default OffersList;
