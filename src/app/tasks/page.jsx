"use client";

import { useEffect, useState } from "react";

import API from "@/services/api";

import ProtectedRoute from "@/components/ProtectedRoute";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import TaskCard from "@/components/TaskCard";

export default function TasksPage() {

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  // FETCH TASKS
  const fetchTasks = async () => {

    try {

      setLoading(true);

      const response = await API.get("tasks/");

      setTasks(response.data);

    } catch (error) {

      console.log(
        "Error fetching tasks:",
        error?.response?.data || error.message
      );

    } finally {

      setLoading(false);
    }
  };
useEffect(() => {

  const loadTasks = async () => {
    await fetchTasks();
  };

  loadTasks();

}, []);

  // DELETE TASK
  const handleDelete = async (id) => {

    try {

      await API.delete(`tasks/delete/${id}/`);

      fetchTasks();

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

          <div className="flex-1 p-10 overflow-y-auto">

            <h1 className="text-4xl font-bold mb-7 text-black">
              All Tasks
            </h1>

            {loading ? (

              <p>Loading tasks...</p>

            ) : (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {tasks.map((task) => (

                  <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
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