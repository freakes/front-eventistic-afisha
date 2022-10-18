import React, {ChangeEvent} from 'react';
import classes from "./MySelect.module.css";

interface MySelectProps {
    options: {value: string, name: string}[];
    defaultValue: string;
    name?: string
    onChange: (val: string) => void
}

const MySelect = ({options, defaultValue, name, onChange}: MySelectProps) => {
    return (
        <select
            className={classes.mySelect}
            onChange={(e) => onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;