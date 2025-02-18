import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

const Todo = ({ task, deleteTodo, editTodo, markComplete }) => {
  return (
    <div
      className={`flex sm:flex-row justify-between items-center p-4 rounded-lg shadow-md ${
        task.completed ? "bg-gray-600" : "bg-gray-800"
      } text-white transition-all duration-300 gap-4 sm:gap-0`}
    >
      <p
        className={`flex-1 text-lg font-medium text-center sm:text-left ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.task}
      </p>
      <div className="flex items-center gap-4">
        <FaCheckCircle
          className="text-2xl text-green-400 cursor-pointer hover:text-green-500 transition"
          onClick={() => markComplete(task.id)}
        />
        <AiFillEdit
          className="text-2xl text-yellow-400 cursor-pointer hover:text-yellow-500 transition"
          onClick={() => editTodo(task.id)}
        />
        <BsFillTrashFill
          className="text-2xl text-red-500 cursor-pointer hover:text-red-600 transition"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
export default Todo;
