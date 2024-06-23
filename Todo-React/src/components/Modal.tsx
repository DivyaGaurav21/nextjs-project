import React from 'react';
import { ModalProps } from '../types/post';

const Modal: React.FC<ModalProps> = ({ children, onHideModal }) => {
    const stopPropagation = (event: React.MouseEvent) => {
        event.stopPropagation();
    };
    return (
        <div
            className='fixed w-full h-screen bg-yellow-950 bg-opacity-60 flex justify-center items-center'
            onClick={onHideModal}
        >
            <div onClick={stopPropagation}>
                {children}
            </div>
        </div>
    )
}

export default Modal