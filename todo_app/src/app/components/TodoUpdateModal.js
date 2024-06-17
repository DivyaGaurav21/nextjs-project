import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';

const TodoUpdateModal = ({ isOpen, closeModal, modalData, allTodos }) => {
    const title = modalData?.title;
    const content = modalData?.content;
    // console.log(modalData);
    const [todoTitle, setTodoTitle] = useState(title);
    const [todoContent, setTodoContent] = useState(content);

    const handleTitleChange = (e) => {
        setTodoTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setTodoContent(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(todoTitle  , todoContent);
        try {
            await axios.put(`/api/todos/${modalData._id}`, {
                ...modalData,
                title: todoTitle,
                content: todoContent,
            })
            allTodos()
            toast("todo updated successfully")
            setTodoTitle('');
            setTodoContent('');
        } catch (e) {
            console.log('error in posting data from modal', e.message);
        } finally {
            closeModal();
        }
    };

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
            top: '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, 0)',
            maxHeight: '90%',
            width: '80%',
            overflowY: 'auto',
            padding: '25px'
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Todo Modal"
            shouldCloseOnOverlayClick={true}
            style={customStyles}
        >
            <div className="px-6 py-6 lg:px-24 bg-orange-200">
                <button
                    className="absolute top-1 right-1 text-gray-500 bg-red-800 hover:text-gray-800"
                    onClick={closeModal}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="todoTitle" className="block mb-2 text-sm font-medium">
                            Todo Title
                        </label>
                        <input
                            type="text"
                            name="todoTitle"
                            id="todoTitle"
                            value={todoTitle}
                            onChange={handleTitleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter todo title"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="todoContent" className="block mb-2 text-sm font-medium">
                            Todo Content
                        </label>
                        <input
                            type="text"
                            name="todoContent"
                            id="todoContent"
                            value={todoContent}
                            onChange={handleContentChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter todo content"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Add Todo
                    </button>
                </form>
                <Toaster/>
            </div>
        </Modal>
    );
    
};

export default TodoUpdateModal;
