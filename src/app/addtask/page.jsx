"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import TaskForm from "@/components/TaskForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CreateTaskPage() {

  return (

    <ProtectedRoute>

      <div className="flex h-screen bg-gray-100">

        <Sidebar />

        <div className="flex-1 flex flex-col">

          <Navbar />

          <div className="flex-1 p-10 overflow-y-auto">

            <h1 className="text-4xl text-black font-bold mb-8">
              Add Task
            </h1>

            <TaskForm />

          </div>

        </div>

      </div>

    </ProtectedRoute>
  );
}