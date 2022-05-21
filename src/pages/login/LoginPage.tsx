import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { LoginCard } from '../../components/cards/Cards';
import { login, LoginFormValues } from '../../redux/actions/auth/authActions';
import { AppState } from '../../redux/reducers';
import AuthService from '../../services/authService';
import LoginForm from './LoginForm';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authService = new AuthService();
    const error = useSelector((state: AppState) => state.authReducer.error);
    const errorMessage = useSelector((state: AppState) => state.authReducer.errorMessage);
    const authenticated = useSelector((state: AppState) => state.authReducer.success);

    const handleLogin = (values: LoginFormValues): void => {
        dispatch(login(values));
    };

    useEffect(() => {
        if (authenticated) {
            navigate('/main');
        }
    }, [authenticated, navigate]);

    useEffect(() => {
        if (authService.getAuthToken() !== null) {
            navigate('/main');
        }
    }, [navigate]);

    return (
        <LoginCard>
            <h3 className="textCenter">Welcome to JobPortal</h3>
            <p className="secondaryText textCenter">Provide your credentals to log in</p>
            {error && (
                <Alert className="alert" color="danger" title="error" isOpen>
                    <p>{errorMessage}</p>
                </Alert>
            )}
            <LoginForm handleLogin={handleLogin} />
        </LoginCard>
    );
};

export default LoginPage;
