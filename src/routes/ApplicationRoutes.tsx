import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginTemplate from '../components/templates/LoginTemplate';
import MainTemplate from '../components/templates/MainTemplate';
import CardOverview from '../pages/cardOverview';
import LandingPage from '../pages/landing';
import LoginPage from '../pages/login';
import OfferOverview from '../pages/offerOverview';
import OffersOverview from '../pages/offersOverview';
import ReservationOverview from '../pages/reservationOverview';

const ApplicationRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainTemplate />}>
                    <Route path="main" element={<LandingPage />} />
                    <Route path="offer/:offerId" element={<OfferOverview />} />
                    <Route path="offers" element={<OffersOverview />} />
                    <Route path="card" element={<CardOverview />} />
                    <Route path="reservation/:reservationId" element={<ReservationOverview />} />
                </Route>
                <Route element={<LoginTemplate />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="" element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default ApplicationRoutes;
