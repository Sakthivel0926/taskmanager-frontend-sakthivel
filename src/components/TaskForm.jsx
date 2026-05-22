"use client";

import { useState } from "react";
import API from "@/services/api";

export default function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await API.post("tasks/create/", {
        title,
        description,
        status,
        due_date: dueDate,
      });

      console.log("Task Added:", response.data);
      alert("Task Added Successfully");

      setTitle("");
      setDescription("");
      setStatus("pending");
      setDueDate("");

      if (typeof fetchTasks === "function") {
        fetchTasks();
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.log("Add Task Error:", error?.response?.data || error.message);
      alert("Failed To Add Task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md mb-8"
    >

      
      <input
        type="text"
        placeholder="Enter Task Title"
        className="w-full border p-3 rounded-lg mb-4 text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

    
      <textarea
        placeholder="Enter Task Description"
        className="w-full border p-3 rounded-lg mb-4 text-black"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <select
        className="border p-3 bg-white text-black rounded-lg mb-4"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="pending">Pending</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <input
        type="date"
        className="w-full border p-3 rounded-lg mb-4 text-black"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
    </ProtectedRoute>
  );
}
