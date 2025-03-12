import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/db'; 
import Todo from '@/app/models/Todo'; 
import { ApiResponse, Todo as TodoType } from '@/app/types';
import mongoose from 'mongoose';

// Helper to validate MongoDB ObjectId
function isValidObjectId(id: string | undefined): boolean {
  return !!id && mongoose.Types.ObjectId.isValid(id);
}

// Function to extract ID from URL
function getTodoId(request: NextRequest): string | undefined {
  const segments = request.nextUrl.pathname.split('/');
  return segments.pop(); // Get the last part of the URL
}

// GET - Fetch a specific todo
export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<TodoType | null>>> {
  try {
    const id = getTodoId(request);

    if (!isValidObjectId(id)) {
      return NextResponse.json({ success: false, error: 'Invalid todo ID' }, { status: 400 });
    }

    await dbConnect();
    const todo = await Todo.findById(id);

    if (!todo) {
      return NextResponse.json({ success: false, error: 'Todo not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch todo' }, { status: 500 });
  }
}

// PUT - Update a todo
export async function PUT(request: NextRequest): Promise<NextResponse<ApiResponse<TodoType | null>>> {
  try {
    const id = getTodoId(request);

    if (!isValidObjectId(id)) {
      return NextResponse.json({ success: false, error: 'Invalid todo ID' }, { status: 400 });
    }

    const data: Partial<TodoType> = await request.json();
    await dbConnect();

    const todo = await Todo.findById(id);
    if (!todo) {
      return NextResponse.json({ success: false, error: 'Todo not found' }, { status: 404 });
    }

    if (data.title !== undefined) todo.title = data.title;
    if (data.completed !== undefined) todo.completed = data.completed;

    await todo.save();
    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update todo' }, { status: 500 });
  }
}

// DELETE - Remove a todo
export async function DELETE(request: NextRequest): Promise<NextResponse<ApiResponse<TodoType | null>>> {
  try {
    const id = getTodoId(request);

    if (!isValidObjectId(id)) {
      return NextResponse.json({ success: false, error: 'Invalid todo ID' }, { status: 400 });
    }

    await dbConnect();
    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return NextResponse.json({ success: false, error: 'Todo not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete todo' }, { status: 500 });
  }
}
