import { NextRequest, NextResponse } from "next/server";
import { connectDatabase } from "@/helper/db";
// import bcryptjs from "bcryptjs";
// import { sendEmail } from "@/helpers/mailer";

import { User } from '../../../../model/user'

// connectDatabase()

export async function POST(request) {
    try {
        await connectDatabase();
        const reqBody = await request.json()
        const { username, email, password } = reqBody;

        //check if user already exists
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        //hash password
        // const salt = await bcryptjs.genSalt(10)
        // const hashedPassword = await bcryptjs.hash(password, salt)
        // console.log(hashedPassword)

        const newUser = new User({
            username,
            email,
            password
        })

        const savedUser = await newUser.save()
        // console.log(savedUser);

        // //send verification email
        // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id })

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )

    }
}