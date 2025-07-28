import React, { createContext, useState, useEffect } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, { ...task, id: Date.now().toString() }]);
  };

  const editTask = (id, updates) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const moveTask = (id, newStatus, newIndex) => {
    setTasks((prev) => {
      const t = prev.find((x) => x.id === id);
      const others = prev.filter((x) => x.id !== id);
      const updated = { ...t, status: newStatus };
      // insert in correct position grouping by status
      const before = others.filter((x) => x.status === newStatus);
      const after = others.filter((x) => x.status !== newStatus);
      return [
        ...after,
        ...before.slice(0, newIndex),
        updated,
        ...before.slice(newIndex),
      ];
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, editTask, deleteTask, moveTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
