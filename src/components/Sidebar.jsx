"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-black text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="flex flex-col gap-4">

        <Link href="/tasks">
          <button className="w-full bg-gray-800 hover:bg-gray-700 p-3 rounded-xl text-left">
            All Tasks
          </button>
        </Link>

        <Link href="/addtask">
          <button className="w-full bg-gray-800 hover:bg-gray-700 p-3 rounded-xl text-left">
            Add Task
          </button>
        </Link>

      </div>
    </div>
  );
}