"use client";

import { useState, useContext } from "react";

import Link from "next/link";

import { AuthContext } from "@/context/AuthContext";

export default function LoginPage() {

    const { loginUser } = useContext(AuthContext);

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {

        e.preventDefault();

        await loginUser(
            username,
            password
        );
    };


    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg w-[400px]"
            >

                <h1 className="text-3xl font-bold text-center mb-6 text-black">
                    Welcome
                </h1>

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full border p-3 rounded-lg mb-4 text-gray-700"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded-lg mb-4 text-gray-700"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-black text-white p-3 rounded-lg mb-4">
                    Login
                </button>


                <div className="text-right mb-4">

                    <Link
                        href="/forgot-password"
                        className="text-blue-600 text-sm"
                    >
                        Forgot Password?
                    </Link>

                </div>


                <button
                    type="button"
                    className="w-full text-orange-500 border p-3 rounded-lg mb-3"
                >
                    Continue with Google
                </button>

                <button
                    type="button"
                    className="w-full text-black border p-3 rounded-lg"
                >
                    Continue with GitHub
                </button>


                <p className="text-center text-gray-800 mt-5">

                    Don't have an account?

                    <Link
                        href="/register"
                        className="text-blue-600 ml-2"
                    >
                        Register
                    </Link>

                </p>

            </form>

        </div>
    );
}