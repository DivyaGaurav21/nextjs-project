import React from 'react';
import Button from './Button';
import type { postProps } from '../types/post';

const Posts: React.FC<postProps> = ({ id, body, author, onDeletePost, onEditPost }) => {
    return (
        <li className='bg-red-950 p-6 border-2 border-yellow-500 rounded-2xl flex flex-row flex-wrap gap-4 items-center min-w-[350px]'>
            <div className='flex-1'>
                <h3 className='text-yellow-600 font-extrabold text-2xl'>{author}</h3>
                <p className='font-serif text-xl font-bold text-white'>{body}</p>
            </div>
            <div className='flex gap-2'>
                <Button
                    variant='secondary'
                    onClick={() => onDeletePost(id)}
                >❌</Button>
                <Button
                    variant='primary'
                    onClick={() => onEditPost(id)}
                >✒️</Button>
            </div>
        </li>
    )
}

export default Posts;
