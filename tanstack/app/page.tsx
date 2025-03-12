'use client';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto max-w-lg px-4">        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TodoForm />
          <TodoList />
        </div>
        
        <p className="text-center mt-6 text-sm text-gray-500">
          Built with Next.js, TypeScript, TanStack Query, Axios, and Tailwind CSS
        </p>
      </div>
    </main>
  );
}