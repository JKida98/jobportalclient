import { useFormikContext } from 'formik';
import React from 'react';
import './formInputs.css';
import { labelFromName } from './formInputsHelpers';

export interface INumberInputProps {
    name: string;
    displayName?: string;
    value?: any;
}

const NumberInput: React.FC<INumberInputProps> = ({ name, displayName, value }) => {
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
                type="number"
                className="textInput w-100"
            />
        </div>
    );
};

export default NumberInput;
