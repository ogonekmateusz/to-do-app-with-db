import React from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { fetchTasks, deleteTask, addTask } from "./api/tasks";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
    console.log(tasks);
  }, []);

  const DeleteTask = async (taskId) => {
    await deleteTask(taskId);
    const updatedTasks = await fetchTasks();
    setTasks(updatedTasks);
  };

  const AddTask = async (taskName) => {
    await addTask(taskName);
    const updatedTasks = await fetchTasks();
    setTasks(updatedTasks);
  };

  return (
    <div className="to-do-app-container bg-linear-to-tr from-blue-200 via-blue-400 to-blue-600 w-full h-screen flex justify-center items-center">
      <div className="to-do-app-main flex flex-col bg-linear-to-tr from-white/60 to-white/90 w-[80%] md:w-[90%] lg:w-[40%] h-[80%] sm:h-[70%] md:h-[60%] lg:h-[65%] p-[2em] rounded-xl shadow-lg">
        <Header />
        <TaskForm addTask={AddTask} />
        <TaskList DeleteTask={DeleteTask} taskList={tasks} />
      </div>
    </div>
  );
}
