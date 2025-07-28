import React from "react";
import { TaskProvider } from "./Context/TaskContext";
import TaskBoard from "./Components/TaskBoard";

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl text-center text-blue-900 font-bold mb-4">
          Kanban Board
        </h1>
        <TaskBoard />
      </div>
    </TaskProvider>
  );
}

export default App;
