import axios from 'axios';
import { Todo, TodoUpdateInput, ApiResponse } from '../types';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await apiClient.get<ApiResponse<Todo[]>>('/todos');
  if (!response.data.success) {
    throw new Error(response.data.error || 'Failed to fetch todos');
  }
  return response.data.data || [];
};

export const getTodo = async (id: string): Promise<Todo> => {
  const response = await apiClient.get<ApiResponse<Todo>>(`/todos/${id}`);
  if (!response.data.success) {
    throw new Error(response.data.error || 'Failed to fetch todo');
  }
  return response.data.data as Todo;
};

export const createTodo = async (title: string): Promise<Todo> => {
  const response = await apiClient.post<ApiResponse<Todo>>('/todos', { title });
  if (!response.data.success) {
    throw new Error(response.data.error || 'Failed to create todo');
  }
  return response.data.data as Todo;
};

export const updateTodo = async (id: string, updates: TodoUpdateInput): Promise<Todo> => {
  const response = await apiClient.put<ApiResponse<Todo>>(`/todos/${id}`, updates);
  if (!response.data.success) {
    throw new Error(response.data.error || 'Failed to update todo');
  }
  return response.data.data as Todo;
};

export const deleteTodo = async (id: string): Promise<Todo> => {
  const response = await apiClient.delete<ApiResponse<Todo>>(`/todos/${id}`);
  if (!response.data.success) {
    throw new Error(response.data.error || 'Failed to delete todo');
  }
  return response.data.data as Todo;
};

export default apiClient;