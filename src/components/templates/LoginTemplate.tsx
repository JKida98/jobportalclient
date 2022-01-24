import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import './templates.css';

const LoginTemplate: React.FC = () => {
    return (
        <div className="loginTemplate">
            <Outlet />
        </div>
    );
};

export default LoginTemplate;
