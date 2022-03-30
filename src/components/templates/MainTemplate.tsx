import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import * as types from '../../redux/constants';
import AuthService from '../../services/authService';
import './templates.css';

const MainTemplate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authService = new AuthService();

    const handleLogout = () => {
        authService.clear();
        dispatch({ type: types.AUTH_USER_RESET });
        navigate('/login');
    };

    return (
        <div className="mainTemplate">
            <div className="navigation mb-4">
                <div className="navigation-item" onClick={() => navigate('main')}>
                    Home
                </div>
                <div className="navigation-item" onClick={() => navigate('offers')}>
                    My offers
                </div>
                <div className="navigation-item">Profile</div>
                <div className="navigation-item" onClick={() => navigate('card')}>
                    Card
                </div>
                <div className="navigation-item" onClick={() => handleLogout()}>
                    Logout
                </div>
            </div>
            <Container>
                <Outlet />
            </Container>
        </div>
    );
};

export default MainTemplate;
