'use client';

import { useState, FormEvent } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../api/apiClient';

export default function TodoForm() {
  const [title, setTitle] = useState<string>('');
  const queryClient = useQueryClient();
  
  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      setTitle('');
    },
  });
  
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (title.trim()) {
      createMutation.mutate(title);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={createMutation.isPending}
          className="px-4 py-3 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
        >
          {createMutation.isPending ? 'Adding...' : 'Add'}
        </button>
      </div>
    </form>
  );
}