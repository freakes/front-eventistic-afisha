import React, {ChangeEvent} from 'react';
import classes from "./MyInput.module.css";

interface MyInputProps {
    placeholder: string;
    className?: string;
    onChange?: (e: ChangeEvent) => void
}

const MyInput = ({placeholder, className, onChange}: MyInputProps) => {
    return (
            <input onChange={onChange} name="text" placeholder={placeholder} className={classes.myInput + " " + className} >
            </input>
    );
};

export default MyInput;