import { useEffect, useState } from "react";
import Task from "./Task";
import { fetchTasks } from "../api/tasks";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
    console.log(tasks);
  }, []);

  return (
    <div className="to-do-app-task-list flex flex-col space-y-4 overflow-y-auto flex-1">
      {tasks.map((task) => (
        <Task key={task.id} taskName={task.taskName} />
      ))}
    </div>
  );
}
