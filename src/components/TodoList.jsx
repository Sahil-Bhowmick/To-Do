import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import Edit from "./Edit";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = (todo) => {
    setTodoValue([
      ...todoValue,
      { id: uuidv4(), task: todo, isEditing: false, completed: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const markComplete = (id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearAll = () => {
    setTodoValue([]);
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 p-6 sm:p-8 md:rounded-lg shadow-xl md:mt-10 w-full h-screen md:h-auto">
      <h1 className="text-center text-2xl sm:text-3xl font-bold  mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Todo App
      </h1>
      <Form createTodo={createTodo} />
      <div className="mt-6 space-y-4">
        {todoValue.map((todo) =>
          todo.isEditing ? (
            <Edit key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              markComplete={markComplete}
            />
          )
        )}
      </div>
      {todoValue.length > 0 && (
        <button
          className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition font-semibold"
          onClick={clearAll}
        >
          Clear All Tasks
        </button>
      )}
    </div>
  );
};

export default TodoList;
