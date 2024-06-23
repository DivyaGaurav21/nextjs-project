import React from 'react';
import { ButtonProps } from '../types/post';

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
    let className = "";

    switch (variant) {
        case 'primary':
            className += 'bg-purple-500 border-2';
            break;
        case 'secondary':
            className += 'bg-yellow-500 border-2';
            break;
        case 'danger':
            className += 'bg-red-950 border';
            break;
        default:
            break;
    }

    return (
        <button
            className={`py-2 px-4 ${variant === 'secondary' ? "text-black" : "text-white"} font-extrabold border-yellow-500 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
