import { useFormikContext } from 'formik';
import React from 'react';
import './formInputs.css';

export interface ITextInputProps {
    name: string;
    displayName?: string;
    hidden?: boolean;
}

const TextInput: React.FC<ITextInputProps> = ({ name, displayName, hidden }) => {
    const { handleChange } = useFormikContext();

    return (
        <div className="mb-4">
            <div className="mb-2">
                <label>{displayName ?? name}</label>
            </div>
            <input name={name} onChange={handleChange} type={hidden ? 'password' : 'text'} className="textInput w-100" />
        </div>
    );
};

export default TextInput;
