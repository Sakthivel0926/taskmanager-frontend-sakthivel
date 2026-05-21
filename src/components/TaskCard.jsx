export default function TaskCard({ task, onEdit, onDelete }) {
    return (
        <div className="bg-white p-5 rounded-xl shadow-md">

            <h2 className="text-xl font-bold text-black">
                {task.title}
            </h2>

            <p className="text-gray-600 mt-2">
                {task.description}
            </p>

            <div className="mt-4 flex items-center justify-between">

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {task.status}
                </span>

                <div className="flex gap-2">

                    <button
                        onClick={() => onEdit(task)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-yellow-600"
                    >
                        Update
                    </button>

                    <button
                        onClick={() => onDelete(task.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                    >
                        Delete
                    </button>

                </div>

            </div>
        </div>
    );
}