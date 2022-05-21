import { Formik } from 'formik';
import React from 'react';
import TextInput from '../../components/formInputs/TextInput';
import { LoginFormValues } from '../../redux/actions/auth/authActions';

export interface ILoginFormProps {
    handleLogin: (values: LoginFormValues) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ handleLogin }) => {
    const initialValues: LoginFormValues = {
        email: '',
        password: ''
    };

    return (
        <Formik initialValues={initialValues} onSubmit={(values) => handleLogin(values)}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <TextInput name="email" />
                    <TextInput name="password" secret />
                    <button className="actionButton" type="submit">
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    );
};

export default LoginForm;
