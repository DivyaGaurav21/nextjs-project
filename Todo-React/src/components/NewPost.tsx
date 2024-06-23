import React, { useState } from 'react'
import Button from './Button'
import { NewPostProps, PostData } from '../types/post'

const NewPost: React.FC<NewPostProps> = ({ onHideModal, onAddPost }) => {
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");

    const formDatHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const newPost: PostData = { author, body, id: Math.random() };
        onAddPost(newPost);
        setAuthor("");
        setBody("");
        onHideModal();
    }
    return (
        <form
            onSubmit={formDatHandler}
            className='bg-purple-900 p-4 rounded-2xl flex flex-col gap-2 w-[350px] md:w-[500px] z-20'
        >
            <div className='w-full'>
                <label htmlFor='name' className='block font-bold mb-3 text-white'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    required
                    className='w-full h-9 outline-none pl-2'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className='w-full'>
                <label htmlFor='body' className='block font-bold mb-3 text-white'>Text</label>
                <textarea
                    id='body'
                    required
                    rows={3}
                    className='w-full pl-2'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <div className='p-4 flex justify-between'>
                <Button variant='danger' onClick={onHideModal}>Cancel</Button>
                <Button variant='secondary'>Submit</Button>
            </div>
        </form>
    )
}

export default NewPost