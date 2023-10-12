'use client'
import React, { useState } from 'react';
import GetTodos from '../components/GetTodos';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const TodoForm = () => {
    const [title, setTitle] = useState('exercise');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);
            await axios.post("/api/todos", { title, content, userId: "6527a1e063f8f3bcb7322c85" });
            setTitle('exercise');
            setContent('');
            toast("new todo created")
            setLoading(false);
            setUpdate(true);

        } catch (error) {
            console.log(error.message);
            setTitle('exercise');
            setContent('');
        }
        // Add code to handle the submission of the todo, e.g., sending to an API or updating state.
        // You can console.log(title, content, status) to see the selected values.
    };

    return (
        <div>
            <form className="bg-orange-100 shadow-md rounded-lg p-4 md:w-[70vw] mx-auto mt-8">
                <div className="flex flex-col md:flex-row">
                    <div className="mb-4 md:mr-4 w-full md:w-1/3">
                        <label htmlFor="title" className="block text-lg font-extrabold text-center text-red-900">
                            Todo Cateogary
                        </label>
                        <select
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm
                        h-8 focus:ring focus:ring-opacity-50 focus:ring-blue-400"
                        >
                            <option value="exercise">Exercise</option>
                            <option value="study">Study</option>
                            <option value="yoga">Yoga</option>
                            <option value="work">Work</option>
                            <option value="college">College Work</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="mb-4 w-full md:w-2/3">
                        <label htmlFor="content" className="block text-2xl text-center font-extrabold text-red-600">
                            write your todos here
                        </label>
                        <input
                            type="text"
                            id="content"
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="mt-1 h-14 pl-5 block w-full border
                         border-red-300 rounded-md shadow-sm outline-none"
                        />
                    </div>
                </div>

                <div className="text-right">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-900 focus:outline-none"
                    >
                        Add Todo
                    </button>
                </div>
            </form>
            <Toaster />
            <GetTodos update={update} />
        </div>
    );
};

export default TodoForm;
