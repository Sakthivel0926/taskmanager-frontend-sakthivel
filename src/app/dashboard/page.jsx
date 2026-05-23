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
  const [editingTask, setEditingTask] = useState(null);
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


            <p className="text-lg text-gray-600 mb-10">
              Manage your tasks easily.
            </p>

            {loading ? (

              <p>Loading tasks...</p>

            ) : (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {tasks.map((task) => (

                  <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                    onEdit={setEditingTask}
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