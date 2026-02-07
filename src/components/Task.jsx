import React from "react";

export default function Task({ taskName }) {
  return (
    <div className="to-do-app-task p-3 rounded-lg w-full bg-gradient-to-tr from-blue-400/60 via-blue-400 to-blue-500 flex justify-between items-center gap-4">
      <p className="break-words whitespace-normal overflow-x-auto">
        {taskName}
      </p>
      <button className="bg-white text-xl p-2 rounded-xl shadow-sm text-2xl cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out flex-shrink-0">
        ❌
      </button>
    </div>
  );
}
