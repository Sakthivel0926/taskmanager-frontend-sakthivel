"use client";

import { useState, useContext } from "react";

import Link from "next/link";

import { AuthContext } from "@/context/AuthContext";

export default function RegisterPage() {

    const { registerUser } = useContext(AuthContext);

    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {

        e.preventDefault();

        await registerUser(
            username,
            email,
            password
        );
    };


    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg w-[400px]"
            >

                <h1 className="text-3xl font-bold mb-6 text-center text-black">
                    Create Account
                </h1>

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full text-gray-800 border p-3 rounded-lg mb-4"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full text-gray-800 border p-3 rounded-lg mb-4"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full text-gray-800 border p-3 rounded-lg mb-4"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
                    Register
                </button>

                <p className="text-center text-gray-800 mt-5">

                    Already have an account?

                    <Link
                        href="/login"
                        className="text-blue-600 ml-2"
                    >
                        Login
                    </Link>

                </p>

            </form>

        </div>
    );
}