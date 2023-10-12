import { NextRequest, NextResponse } from "next/server";
import { connectDatabase } from "@/helper/db";

import { Todo } from "../../../model/todo"


// connectDatabase();

//------function to crete todo--------------------//
export async function POST(request) {
    try {
        await connectDatabase();
        const { title, content, userId } = await request.json();

        const newTodo = new Todo({
            title,
            content,
            userId
        })

        const savedTodo = await newTodo.save()

        return NextResponse.json({
            message: "Todos created successfully",
            success: true,
            savedTodo
        })

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}

//--------------function to get all todos---------//

export async function GET(request) {
    try {
        await connectDatabase();
        const todos = await Todo.find();
        // console.log(todos)
        return NextResponse.json({
            message: "all todos",
            success: true,
            todos
        })
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 501 }
        )
    }
}




