import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const onTaskChange = (e) => {
    setTaskName(e.target.value);
    console.log(taskName);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (taskName == "") {
      alert("Enter the task name!");
      return;
    }

    addTask(taskName);
    setTaskName("")
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="to-do-app-task-form my-4 flex w-full justify-between space-x-3"
    >
      <input
        type="text"
        placeholder="Add a new task…"
        onChange={onTaskChange}
        value={taskName}
        className="p-3 border border-blue-400 rounded-lg text-sm md:text-basef outline-none shadow-sm w-full  "
      />
      <button
        type="submit"
        className="cursor-pointer bg-linear-to-tr from-blue-500 via-blue-600 to-blue-700 font-bold text-white uppercase  md:p-3 shadow-sm rounded-lg text-2xl w-[3em] hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        +
      </button>
    </form>
  );
}
