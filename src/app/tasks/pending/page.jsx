"use client";

import { useEffect, useState } from "react";
import API from "@/services/api";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import TaskCard from "@/components/TaskCard";

export default function PendingTasksPage() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    fetchTasks();

  }, []);

  const fetchTasks = async () => {

    try {

      const response = await API.get("tasks/");

      const pendingTasks = response.data.filter(
        (task) => task.status === "pending"
      );

      setTasks(pendingTasks);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <ProtectedRoute>
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl text-black font-bold mb-8">
            Pending Tasks
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {tasks.map((task) => (

              <TaskCard
                key={task.id}
                task={task}
              />

            ))}

          </div>

        </div>

      </div>

    </div>
    </ProtectedRoute>
  );
}