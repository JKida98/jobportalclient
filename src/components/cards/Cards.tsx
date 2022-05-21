import React from 'react';
import Loading from '../loading/Loading';
import './cards.css';

export interface ISimpleCardProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

interface ILoginCardProps {
    children?: React.ReactNode;
}

export interface ITitleLessCardProps {
    children?: React.ReactNode;
}

export const SimpleCard = ({ title, subtitle, children }: ISimpleCardProps) => {
    return (
        <div className="card p-4">
            <Loading>
                <h3>{title}</h3>
                <p className="secondaryText">{subtitle}</p>
                {children}
            </Loading>
        </div>
    );
};

export const LoginCard = ({ children }: ILoginCardProps) => {
    return (
        <div className="loginCard p-4">
            <Loading>{children}</Loading>
        </div>
    );
};

export const TitleLessCard = ({ children }: ITitleLessCardProps) => {
    return (
        <div className="card p-4">
            <Loading>{children}</Loading>
        </div>
    );
};
