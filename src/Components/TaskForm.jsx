import React, { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export default function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "To Do",
    tags: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    addTask({ ...form });
    setForm({
      title: "",
      description: "",
      priority: "",
      status: "To Do",
      tags: [],
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-cyan-400 px-4 py-2 rounded shadow space-y-4"
    >
      {/* Title */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="title"
          className="text-orange-600 font-semibold text-xl w-28"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Task title"
          className="border-2 border-amber-800 flex-1 p-1 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </div>

      {/* Description */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="description"
          className="text-orange-600 font-semibold text-xl w-28"
        >
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description (optional)"
          className="border-2 border-amber-800 flex-1 p-1 rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>

      {/* Priority */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="priority"
          className="text-orange-600 font-semibold text-xl w-28"
        >
          Priority:
        </label>
        <select
          id="priority"
          name="priority"
          className="border-2 border-amber-800 flex-1 py-1 cursor-pointer rounded"
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
        >
          <option>Low 💤</option>
          <option>Medium ⚡</option>
          <option>High 🔥</option>
        </select>
      </div>

      {/* Status */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="status"
          className="text-orange-600 font-semibold text-xl w-28"
        >
          Status:
        </label>
        <select
          id="status"
          name="status"
          className="border-2 border-amber-800 flex-1 py-1 cursor-pointer rounded"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}
