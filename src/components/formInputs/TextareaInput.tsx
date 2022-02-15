import { useFormikContext } from 'formik';
import React from 'react';
import './formInputs.css';
import { labelFromName } from './formInputsHelpers';

export interface ITextareaInputProps {
    name: string;
    displayName?: string;
    hidden?: boolean;
    value?: any;
}

const TextareaInput: React.FC<ITextareaInputProps> = ({ name, displayName, value }) => {
    const { handleChange } = useFormikContext();

    return (
        <div className="mb-4">
            <div className="mb-2">
                <label>{displayName ?? labelFromName(name)}</label>
            </div>
            <textarea
                className="textInput w-100"
                value={value}
                rows={5}
                name={name}
                onChange={handleChange}
            />
        </div>
    );
};

export default TextareaInput;
