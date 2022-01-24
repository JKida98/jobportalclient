import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { SimpleCard } from '../../components/cards/Cards';
import { LoginFormValues } from '../../interfaces';
import { login } from '../../redux/actions/authActions';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const error = useSelector((state: RootStateOrAny) => state.auth.error);
    const authenticated = useSelector((state: RootStateOrAny) => state.auth.success);

    const handleLogin = (values: LoginFormValues) => {
        dispatch(login(values));
    };

    useEffect(() => {
        if (authenticated) {
            navigate('/main');
        }
    }, [authenticated]);

    useEffect(() => {
        if (localStorage.getItem('jwt') !== null) {
            navigate('/main');
        }
    }, [navigate]);

    return (
        <SimpleCard title="Welcome to JobPortal" subtitle="Enter your credentials to log in">
            {error && (
                <Alert className="alert" isOpen={true} color="danger" title={'error'}>
                    {error}
                </Alert>
            )}
            <LoginForm handleLogin={handleLogin} />
        </SimpleCard>
    );
};

export default LoginPage;
