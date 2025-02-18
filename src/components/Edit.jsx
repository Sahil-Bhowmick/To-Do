import React, { useState } from "react";

const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    editTodo(value, task.id);
  };

  return (
    <form
      className="flex flex-col sm:flex-row items-center gap-4 w-full bg-gray-800 p-4 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="flex-1 p-3 rounded-lg border-none bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none w-full sm:w-auto"
        placeholder="Update task..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold w-full sm:w-auto">
        Update
      </button>
    </form>
  );
};

export default Edit;
