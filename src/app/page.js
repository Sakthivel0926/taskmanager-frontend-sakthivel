import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        Task Manager
      </h1>

      <Link
        href="/login"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Register
      </Link>

      <Link
        href="/tasks"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Tasks
      </Link>
    </main>
  );
}