"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/services/api";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminPage() {
  const router = useRouter()
  const [tasks, setTasks] = useState([])

    useEffect(() => {

    const isAdmin = localStorage.getItem(
        "is_admin"
    );

    if (isAdmin !== "true") {

        router.push("/dashboard");
    }

}, []);

  const fetchAllTasks = async () => {

    try {

      const response = await API.get("tasks/");

      setTasks(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <ProtectedRoute>

      <div className="flex h-screen bg-gray-100">

        <Sidebar />

        <div className="flex-1 flex flex-col">

          <Navbar />

          <div className="p-10">

            <h1 className="text-4xl text-black font-bold mb-8">
              Admin Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {tasks.map((task) => (

                <div
                  key={task.id}
                  className="bg-white p-6 rounded-2xl shadow-md"
                >

                  <h2 className="text-2xl text-gray-800 font-bold">
                    {task.title}
                  </h2>

                  <p className="text-gray-800 mt-3">
                    {task.description}
                  </p>

                  <div className="mt-4">

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {task.status}
                    </span>

                  </div>

                  <div className="mt-5 text-sm text-gray-500">

                    Added By:
                    {" "}
                    {task.user?.username || "Unknown"}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </ProtectedRoute>
  );
}