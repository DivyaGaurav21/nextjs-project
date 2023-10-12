import { NextRequest, NextResponse } from "next/server";
import { connectDatabase } from "@/helper/db";

import { User } from '../../../model/user'

// connectDatabase()

export async function GET(request) {
    try {
        await connectDatabase();
        const user = await User.find()
        // console.log(user)
        return NextResponse.json({
            message: "total user in db",
            success: true,
            user
        })
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 501 }
        )

    }
}