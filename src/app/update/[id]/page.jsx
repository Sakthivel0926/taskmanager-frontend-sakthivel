"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import API from "@/services/api";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function UpdateTaskPage() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (id) {

      fetchTask();
    }

  }, [id]);

  const fetchTask = async () => {

    try {

      const response = await API.get(`tasks/${id}/`);

      const task = response.data;

      setTitle(task.title || "");

      setDescription(task.description || "");

      setStatus(task.status || "pending");

      setDueDate(task.due_date || "");

    } catch (error) {

      console.log(
        "Error Fetching Task:",
        error?.response?.data || error.message
      );
    }
  };

  const handleUpdate = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await API.put(
        `tasks/update/${id}/`,
        {
          title,
          description,
          status,
          due_date: dueDate,
        }
      );

      alert("Task Updated Successfully");

      router.push("/tasks");

    } catch (error) {

      console.log(
        "Update Error:",
        error?.response?.data || error.message
      );

      alert("Failed To Update Task");

    } finally {

      setLoading(false);
    }
  };

  return (

    <ProtectedRoute>

      <div className="flex h-screen bg-gray-100">

        <Sidebar />

        <div className="flex-1 flex flex-col">

          <Navbar />

          <div className="flex-1 p-10 overflow-y-auto">

            <h1 className="text-4xl font-bold mb-8">
              Update Task
            </h1>

            <form
              onSubmit={handleUpdate}
              className="bg-white p-6 rounded-2xl shadow-md max-w-2xl"
            >

              <input
                type="text"
                placeholder="Task Title"
                className="w-full border p-3 rounded-lg mb-4 text-black"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <textarea
                placeholder="Task Description"
                className="w-full border p-3 rounded-lg mb-4 text-black"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <select
                className="w-full border p-3 rounded-lg mb-4 text-black"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >

                <option value="pending">
                  Pending
                </option>

                <option value="in_progress">
                  In Progress
                </option>

                <option value="completed">
                  Completed
                </option>

              </select>

              <input
                type="date"
                className="w-full border p-3 rounded-lg mb-6 text-black"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg"
              >

                {loading ? "Updating..." : "Update Task"}

              </button>

            </form>

          </div>

        </div>

      </div>

    </ProtectedRoute>
  );
}