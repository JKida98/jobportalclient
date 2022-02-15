import React from 'react';
import { IOfferDto } from '../../dtos/IOfferDto';
import './lists.css';

interface IOffersList {
    list: IOfferDto[];
    action?: any;
}

const OffersList: React.FC<IOffersList> = ({ list, action }) => {
    return (
        <>
            {list?.map((x) => {
                return (
                    <div className="titleSubtitleElement" key={x.id} onClick={() => action(x)}>
                        <p className="titleSubtitleElementTitle">{x.title}</p>
                        <p className="secondaryText">{x.description}</p>
                    </div>
                );
            })}
        </>
    );
};

export default OffersList;
