"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";

import Navbar from "@/components/Navbar";

export default function ProfilePage() {

  const [username, setUsername] = useState("");

  const [role, setRole] = useState("User");

  useEffect(() => {

    const storedUsername =
      localStorage.getItem("username");

    const isAdmin =
      localStorage.getItem("is_admin", "true");

    if (storedUsername) {

      setUsername(storedUsername);
    }

    if (isAdmin === "true") {

      setRole("Admin");

    } else {

      setRole("User");
    }

  }, []);

  return (
    <ProtectedRoute>

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-12">

          <h1 className="text-3xl font-bold mb-10 text-black">
            My Profile
          </h1>

          <div className="bg-white p-5 rounded-3xl shadow-sm max-w-2xl">

            <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold mb-8">

              {username.charAt(0).toUpperCase()}

            </div>

            <div className="mb-8">

              <h2 className="text-3xl font-bold text-black mb-2">
                Username
              </h2>

              <p className="text-2xl text-gray-700 font-medium">
                {username}
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-black mb-2">
                Role
              </h2>

              <p className="text-2xl text-gray-700 font-medium">
                {role}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

    </ProtectedRoute>
  );
}