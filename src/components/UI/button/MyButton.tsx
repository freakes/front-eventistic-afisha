import React from 'react';
import classes from "./MyButton.module.css";

interface MyButtonProps {
    onClick?: (e: React.MouseEvent<HTMLElement>|never) => void;
    children: React.ReactNode
    className?: string;
}

const MyButton = ({onClick, children, className}: MyButtonProps) => {
    return (
        <button onClick={onClick} className={className + " " + classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;