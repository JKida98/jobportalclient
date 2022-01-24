import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import './cards.css';

export interface ISimpleCardProps {
    title: string;
    subtitle?: string;
}

export const SimpleCard: React.FC<ISimpleCardProps> = ({ title, subtitle, children }) => {
    const loading = useSelector((state: RootStateOrAny) => state.loading.loading);

    return (
        <div className="simpleCard p-4">
            {loading ? (
                <Spinner style={{ margin: 'auto' }} />
            ) : (
                <>
                    <h3>{title}</h3>
                    <p className="secondaryText">{subtitle}</p>
                    {children}
                </>
            )}
        </div>
    );
};
