import React from 'react';
import { IOffersList } from '../../interfaces';
import './lists.css';

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
