import React from 'react';
import ApplicationRoutes from './routes/ApplicationRoutes';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return <ApplicationRoutes />;
};

export default Application;
