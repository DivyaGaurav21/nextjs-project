import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/db';
import Todo from '@/app/models/Todo'; 
import { ApiResponse, Todo as TodoType } from '@/app/types';

// GET - Fetch all todos
export async function GET(): Promise<NextResponse> {
  try {
    await dbConnect();
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    
    const response: ApiResponse<TodoType[]> = {
      success: true,
      data: todos,
    };
    
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to fetch todos',
    };
    
    return NextResponse.json(response, { status: 500 });
  }
}

// POST - Create a new todo
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { title } = await request.json();
    
    if (!title || title.trim() === '') {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Title is required',
      };
      
      return NextResponse.json(response, { status: 400 });
    }
    
    await dbConnect();
    
    const newTodo = await Todo.create({
      title,
      completed: false,
    });
    
    const response: ApiResponse<TodoType> = {
      success: true,
      data: newTodo,
    };
    
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to create todo',
    };
    
    return NextResponse.json(response, { status: 500 });
  }
}