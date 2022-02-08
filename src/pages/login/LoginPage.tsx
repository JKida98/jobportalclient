import React, { useEffect } from 'react';
// import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import { login, LoginFormValues } from '../../redux/actions/auth/authActions';
import { AppState } from '../../redux/reducers';
import LoginForm from './LoginForm';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const error = useSelector((state: AppState) => state.authReducer.error);
    const errorMessage = useSelector((state: AppState) => state.authReducer.errorMessage);
    const authenticated = useSelector((state: AppState) => state.authReducer.success);

    const handleLogin = (values: LoginFormValues) => {
        dispatch(login(values));
    };

    useEffect(() => {
        if (authenticated) {
            navigate('/main');
        }
    }, [authenticated, navigate]);

    useEffect(() => {
        if (localStorage.getItem('jwt') !== null) {
            navigate('/main');
        }
    }, [navigate]);

    return (
        <SimpleCard title="Welcome to JobPortal" subtitle="Enter your credentials to log in">
            {error && (
                <Alert className="alert" color="danger" title="error" isOpen>
                    <p>{errorMessage}</p>
                </Alert>
            )}
            <LoginForm handleLogin={handleLogin} />
        </SimpleCard>
    );
};

export default LoginPage;
