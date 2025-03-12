'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../api/apiClient';
import TodoItem from './TodoItem';
import { Todo } from '../types';

export default function TodoList() {
  const { 
    data: todos, 
    isLoading, 
    isError, 
    error 
  } = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });
  
  if (isLoading) {
    return (
      <div className="flex justify-center py-4">
        <div className="animate-pulse flex space-x-4">
          <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
          <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
          <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    );
  }
  
  if (isError) {
    return (
      <div className="text-center py-4 text-red-500">
        <p>Error: {error.message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }
  
  if (!todos || todos.length === 0) {
    return <div className="text-center py-6 text-gray-500">No todos yet. Add one above!</div>;
  }
  
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
}