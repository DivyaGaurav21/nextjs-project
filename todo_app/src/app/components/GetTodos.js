"use client"

import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const GetTodos = ({ update }) => {
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    const [deleteupdate, setDeleteupdate] = useState(false)
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/todos/${id}`);
            toast("todo deleted")
            setDeleteupdate(true)

        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        const allTodos = async () => {
            try {
                setLoading(true);
                const todosData = await axios.get('/api/todos');
                setTodos(todosData.data.todos);
                setLoading(false);

            } catch (error) {
                console.log("Error in GetTodos", error);
            }
        }
        allTodos();
    }, [update, deleteupdate])

    return (
        <div className='px-2 w-[70%] m-auto mt-5'>
            {loading ?
                <p className='text-white text-center mt-12 text-2xl'>Loadind....</p>
                :
                <ul className='flex flex-col gap-1 w-full'>
                    {
                        todos.map(todo => <li key={todo._id}
                            className='border border-red-500 rounded-lg bg-slate-700'>
                            <h1>{todo.title}</h1>
                            <h2>{todo.content}</h2>
                            <h3>{todo.status}</h3>
                            <button
                                className='bg-yellow-200 px-3'
                                onClick={() => handleDelete(todo._id)}
                            >Delete</button>
                        </li>)
                    }
                </ul>
            }
            <Toaster />
        </div>
    )
}

export default GetTodos