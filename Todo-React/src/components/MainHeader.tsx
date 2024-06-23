import React from 'react';
import Button from './Button';
import { MainHeaderProps } from '../types/post';

const MainHeader: React.FC<MainHeaderProps> = ({ onModalShow }) => {

    return (
        <header className='flex flex-row justify-between items-center mb-10 border-b-2 border-yellow-500 pb-10'>
            <h1 className='text-2xl text-yellow-500 font-extrabold'>Online Poster</h1>
            <Button onClick={onModalShow}>
                + New Post
            </Button>
        </header>
    )
}

export default MainHeader;