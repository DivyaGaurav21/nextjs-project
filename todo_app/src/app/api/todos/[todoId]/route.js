import { NextRequest, NextResponse } from 'next/server'
import { connectDatabase } from '@/helper/db'
import { Todo } from '../../../../model/todo'

// connectDatabase();

//---------------get single todo list -------------------//
export async function GET(request, { params }) {
    try {
        const { todoId } = params;
        await connectDatabase()
        const singleTodo = await Todo.findById(todoId);
        return NextResponse.json({
            message: "todo fetch successfully",
            success: true,
            singleTodo
        })
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 502 }
        )
    }
}

//-----------------function for update single todo-------//
export async function PUT(request, { params }) {
    try {
        const { todoId } = params;
        await connectDatabase();
        const { title, content, status } = await request.json();
        let tobeUpdateTodo = await Todo.findById(todoId);
        tobeUpdateTodo.title = title;
        tobeUpdateTodo.content = content;
        tobeUpdateTodo.status = status;
        const updateTodo = await tobeUpdateTodo.save();
        return NextResponse.json({
            message: "Update Todo successfully",
            success: true,
            updateTodo
        })
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 503 });
    }
}

//--------------function to delete single todos---------//

export async function DELETE(request, { params }) {
    try {
        const { todoId } = params;
        await connectDatabase();
        await Todo.findByIdAndDelete(todoId);
        return NextResponse.json({
            message: "Delete Todo successfully",
            success: true,
        })
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 502 }
        );
    }
}