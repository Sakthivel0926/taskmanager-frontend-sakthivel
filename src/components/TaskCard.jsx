"use client";

import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function TaskCard({
  task,
  onDelete,
}) {

  const router = useRouter();

  return (

    <ProtectedRoute>
    <div className="bg-white p-5 rounded-2xl shadow-md">

      <h2 className="text-2xl text-gray-800 font-bold">
        {task.title}
      </h2>

      <p className="text-gray-600 mt-3">
        {task.description}
      </p>

      <div className="mt-4">

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {task.status}
        </span>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => router.push(`/update/${task.id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>

      </div>

    </div>
    </ProtectedRoute>
  );
}