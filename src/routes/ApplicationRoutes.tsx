import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginTemplate from '../components/templates/LoginTemplate';
import MainTemplate from '../components/templates/mainTemplate/MainTemplate';
import LandingPage from '../pages/landing';
import LoginPage from '../pages/login';
import OfferOverview from '../pages/offerOverview';

const ApplicationRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainTemplate />}>
                    <Route path="main" element={<LandingPage />} />
                    <Route path="offer/:offerId" element={<OfferOverview />} />
                </Route>
                <Route element={<LoginTemplate />}>
                    <Route path="login" element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default ApplicationRoutes;
