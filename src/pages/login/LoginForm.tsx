import { Formik } from 'formik';
import React from 'react';
import TextInput from '../../components/formInputs/TextInput';

export interface ILoginFormProps {
    handleLogin: any;
}

const LoginForm: React.FC<ILoginFormProps> = ({ handleLogin }) => {
    const initialValues = {
        email: '',
        password: ''
    };

    return (
        <Formik initialValues={initialValues} onSubmit={(values) => handleLogin(values)}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <TextInput name="email" displayName="Email" />
                    <TextInput name="password" displayName="Password" hidden />
                    <input className="actionButton" type="submit" />
                </form>
            )}
        </Formik>
    );
};

export default LoginForm;
