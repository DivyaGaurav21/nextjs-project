export interface Todo {
    _id: string;
    title: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface TodoCreateInput {
    title: string;
  }
  
  export interface TodoUpdateInput {
    title?: string;
    completed?: boolean;
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }