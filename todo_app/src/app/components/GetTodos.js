"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CreateIcon from '@mui/icons-material/Create';
import Loader from './Loader';
import TodoUpdateModal from './TodoUpdateModal';

const GetTodos = ({ todos, allTodos, loading }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData , setModalData] = useState(null);


    // const openModal = () => {
    //     setModalIsOpen(true);
    //   };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalData(null);
    };

//---api call for delete task----//
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/todos/${id}`);
            allTodos();
            toast("todo deleted")
        } catch (e) {
            console.log(e.message);
        }
    }


    //-----api call for handleUpdate task----//
    const handleUpdateTodo = async (todo) => {
        setModalIsOpen(true);
        setModalData(todo)
    }

    //---api call for update task-----------//
    const handleCompleteOrPendingTodo = async (todo) => {
        let stat;
        if (todo.status == "completed") stat = "pending";
        else if (todo.status == "pending") stat = "completed";
        try {
            console.log(stat);
            await axios.put(`/api/todos/${todo._id}`, { ...todo, status: stat });
            allTodos();
            toast("todo updated");
        } catch (e) {
            console.log("error in update todo", e.message);
        }
    }

    return (
        <div className='px-2 w-full md:w-[71vw] m-auto mt-5'>
            {loading ?
                <div className='flex justify-center items-center'>
                    <Loader w={300} />
                </div>
                :
                <ul className='flex flex-col gap-1 w-full'>
                    {
                        todos.map(todo => <li key={todo._id}
                            className='border border-red-500 rounded-lg bg-orange-100
                            flex flex-col md:flex-row justify-between px-3 items-center
                            '>
                            <div className='flex flex-row gap-3 justify-between w-[350px] md:w-[70%]  xl:w-[75%] items-center'>
                                <h1 className='font-semibold text-green-600'>{todo.title}</h1>
                                <h2 className='font-extrabold text-xl'>{todo.content}</h2>
                                <button
                                    className='bg-red-600 text-white p-2 rounded-full w-11 h-11  hover:bg-red-900'
                                    onClick={() => handleUpdateTodo(todo)}
                                >
                                    <CreateIcon />
                                </button>
                            </div>
                            <div className='flex flex-row p-3 items-center gap-4 relative'>
                                <span className='absolute left-[-95px] top-6 font-bold'>{todo.status}</span>
                                <button className='bg-red-600 text-white p-2 w-11 h-11 block rounded-full hover:bg-red-900'
                                    onClick={() => handleCompleteOrPendingTodo(todo)}
                                >
                                    {todo.status === 'completed' ? <TaskAltIcon /> : <UnpublishedIcon />}
                                </button>
                                <button
                                    className='bg-red-600 text-white p-2 rounded-full w-11 h-11  hover:bg-red-900'
                                    onClick={() => handleDelete(todo._id)}
                                >
                                    <DeleteIcon />
                                </button>
                            </div>
                        </li>)
                    }
                </ul>
            }
           {
            modalData &&  <TodoUpdateModal  isOpen={modalIsOpen} closeModal={closeModal} modalData={modalData} allTodos={allTodos} />
           }
            <Toaster />
        </div>
    )
}

export default GetTodos