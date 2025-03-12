'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo, deleteTodo } from '../api/apiClient';
import { useState } from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(todo.title);
  const queryClient = useQueryClient();
  
  // Update todo mutation
  const updateMutation = useMutation({
    mutationFn: (updates: Partial<Todo>) => updateTodo(todo._id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
  
  // Delete todo mutation
  const deleteMutation = useMutation({
    mutationFn: () => deleteTodo(todo._id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
  
  const handleToggleComplete = (): void => {
    updateMutation.mutate({ completed: !todo.completed });
  };
  
  const handleUpdate = (): void => {
    if (title.trim() !== '') {
      updateMutation.mutate({ title });
      setIsEditing(false);
    }
  };
  
  const handleDelete = (): void => {
    deleteMutation.mutate();
  };
  
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow">
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className="w-5 h-5 mr-3 rounded text-blue-500 focus:ring-blue-400"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleUpdate}
            onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
            className="flex-1 p-1 border border-gray-300 rounded"
            autoFocus
          />
        ) : (
          <span 
            className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.title}
          </span>
        )}
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={() => setIsEditing(!isEditing)} 
          className="p-1 text-sm text-blue-500 hover:text-blue-700"
        >
          Edit
        </button>
        <button 
          onClick={handleDelete} 
          className="p-1 text-sm text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}