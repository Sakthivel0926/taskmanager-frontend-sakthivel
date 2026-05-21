"use client";

import { useEffect, useState } from "react";

import API from "@/services/api";

import ProtectedRoute from "@/components/ProtectedRoute";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import TaskCard from "@/components/TaskCard";

export default function DashboardPage() {

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {

    try {

      const response = await API.get("tasks/");

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (

    <ProtectedRoute>

      <div className="flex h-screen bg-gray-100">

        <Sidebar />

        <div className="flex-1 flex flex-col">

          <Navbar />

          <div className="p-10 overflow-y-auto">

            <p className="text-lg text-gray-600 mb-10">
              Manage your tasks easily.
            </p>

            <h2 className="text-3xl font-semibold mb-6 text-black">
              All Tasks
            </h2>

            {loading ? (

              <p>Loading tasks...</p>

            ) : (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {tasks.map((task) => (

                  <TaskCard
                    key={task.id}
                    task={task}
                  />

                ))}

              </div>
            )}

          </div>

        </div>

      </div>

    </ProtectedRoute>
  );
}