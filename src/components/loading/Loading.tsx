import React from 'react';
import { useSelector } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import { AppState } from '../../redux/reducers';

export interface ILoadingProps {
    children?: any;
}

const Loading = ({ children }: ILoadingProps) => {
    const loading = useSelector((state: AppState) => state.loadingReducer.loading);

    if (loading) {
        return (
            <div className="spinnerWrapper">
                <BounceLoader size={25} />
            </div>
        );
    }

    return <>{children}</>;
};

export default Loading;
