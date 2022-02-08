import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import { AppState } from '../../redux/reducers';
import './cards.css';

export interface ISimpleCardProps {
    title: string;
    subtitle?: string;
    children?: any;
}

export const SimpleCard = ({ title, subtitle, children }: ISimpleCardProps) => {
    const loading = useSelector((state: AppState) => state.loadingReducer.loading);

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
