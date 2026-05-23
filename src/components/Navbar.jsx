"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Navbar() {

  const { logoutUser } = useContext(AuthContext);

  const [username, setUsername] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {

    const storedUsername = localStorage.getItem("username");

    const adminStatus = localStorage.getItem("is_admin");

    if (storedUsername) {

      setUsername(storedUsername);
    }

    if (adminStatus === "true") {

      setIsAdmin(true);
    }

  }, []);

  return (

    <ProtectedRoute>
    <div className="w-full h-20 bg-white shadow-md flex items-center justify-between px-8">

      <div className="flex items-center gap-5">

        <Link
          href="/profile"
          className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-xl transition duration-300"
        >

          <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">

            {username
              ? username.charAt(0).toUpperCase()
              : "U"}

          </div>

          <div>

            <h2 className="text-lg font-semibold text-black">

              {username || "User"}

            </h2>

            <p className="text-sm text-gray-500">

              View Profile 👤

            </p>

          </div>

        </Link>

      </div>

      <div className="flex items-center gap-4">

        {isAdmin && (

          <Link href="/admin">

            <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-5 py-2 rounded-lg font-medium transition duration-300">

              Admin

            </button>

          </Link>

        )}

        <button
          onClick={logoutUser}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-300"
        >
          Logout
        </button>

      </div>

    </div>
    </ProtectedRoute>
  );
}