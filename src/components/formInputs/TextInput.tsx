import { useFormikContext } from 'formik';
import React from 'react';
import './formInputs.css';
import { labelFromName } from './formInputsHelpers';

export interface ITextInputProps {
    name: string;
    displayName?: string;
    secret?: boolean;
    value?: any;
}

const TextInput: React.FC<ITextInputProps> = ({ name, displayName, secret, value }) => {
    const { handleChange } = useFormikContext();

    return (
        <div className="mb-4">
            <div className="mb-2">
                <label>{displayName ?? labelFromName(name)}</label>
            </div>
            <input
                value={value}
                name={name}
                onChange={handleChange}
                type={secret ? 'password' : 'text'}
                className="textInput w-100"
            />
        </div>
    );
};

export default TextInput;
