import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginTemplate from '../components/templates/LoginTemplate';
import MainTemplate from '../components/templates/MainTemplate';
import LandingPage from '../pages/landing';
import LoginPage from '../pages/login';
import OfferOverview from '../pages/offerOverview';
import OffersOverview from '../pages/offersOverview';

const ApplicationRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainTemplate />}>
                    <Route path="main" element={<LandingPage />} />
                    <Route path="offer/:offerId" element={<OfferOverview />} />
                    <Route path="offers" element={<OffersOverview />} />
                </Route>
                <Route element={<LoginTemplate />}>
                    <Route path="login" element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default ApplicationRoutes;
