import React from 'react';
import { Outlet } from 'react-router-dom';
import './templates.css';

const LoginTemplate = () => {
    return (
        <div className="loginTemplate">
            <Outlet />
        </div>
    );
};

export default LoginTemplate;
