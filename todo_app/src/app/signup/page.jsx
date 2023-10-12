'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const SignupPage = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const { email, password, username } = user;
        setButtonDisabled(!(email && password && username));
    }, [user]);


    const onSignup = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            setUser({
                email: "",
                password: "",
                username: ""
            })
            toast("signup successful")
        } catch (error) {
            console.log(error.message);
            setUser({
                email: "",
                password: "",
                username: ""
            })
            toast("user already exist")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1>{loading ? "Processing" : "Signup"}</h1>
            <hr />
            <form onSubmit={onSignup}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="Username"
                    className="input-field"
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email"
                    className="input-field"
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Password"
                    className="input-field"
                />

                <button
                    type="submit"
                    className={`btn ${buttonDisabled ? "disabled" : ""}`}
                    disabled={buttonDisabled}
                >
                    {loading ? "Processing" : "Signup"}
                </button>

                <p>
                    Already have an account?{" "}
                    <a href="/login" className="link">
                        Visit login page
                    </a>
                </p>
            </form>
            <Toaster />
        </div>
    );
};

export default SignupPage;
