"use client";

import { useContext } from "react";

import { AuthContext } from "@/context/AuthContext";

export default function Navbar() {

  const { logoutUser } = useContext(AuthContext);

  return (

    <div className="w-full h-16 bg-white text-black shadow-md flex items-center justify-between px-8">

      <h1 className="text-2xl font-bold">
        Task Manager
      </h1>

      <div className="flex items-center gap-4">

        <button
          onClick={logoutUser}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>
  );
}