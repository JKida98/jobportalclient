import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import * as types from '../../redux/constants';
import './templates.css';

const MainTemplate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        dispatch({ type: types.AUTH_USER_RESET });
        navigate('/login');
    };

    return (
        <div className="mainTemplate">
            <div className="navigation mb-4">
                <div className="navigation-item active" onClick={() => navigate('main')}>
                    Home
                </div>
                <div className="navigation-item" onClick={() => navigate('offers')}>
                    My offers
                </div>
                <div className="navigation-item">Profile</div>
                <div className="navigation-item" onClick={() => handleLogout()}>
                    Logout
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default MainTemplate;
