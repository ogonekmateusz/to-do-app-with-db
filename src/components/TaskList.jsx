import Task from "./Task";

export default function TaskList({ DeleteTask, taskList }) {
  return (
    <div className="to-do-app-task-list flex flex-col space-y-4 overflow-y-auto flex-1">
      {taskList.map((task) => (
        <Task
          key={task.id}
          taskName={task.taskName}
          onDeleteTask={() => DeleteTask(task.id)}
        />
      ))}
    </div>
  );
}
