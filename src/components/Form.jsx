import React, { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    createTodo(value);
    setValue("");
  };

  return (
    <form
      className="flex flex-col sm:flex-row items-center gap-4 w-full bg-gray-800 p-4 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="flex-1 p-3 rounded-lg border-none bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none w-full sm:w-auto"
        placeholder="Add a new task..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold w-full sm:w-auto">
        Add
      </button>
    </form>
  );
};

export default Form;
