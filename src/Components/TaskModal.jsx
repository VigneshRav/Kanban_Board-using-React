import React, { useState, useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

export default function TaskModal({ task, onClose }) {
  const { editTask } = useContext(TaskContext);
  const [form, setForm] = useState({ ...task });

  const handleSave = () => {
    editTask(task.id, form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-cyan-200 bg-opacity-40 flex items-center justify-center px-4">
      <div className="bg-white rounded w-full max-w-md p-4 relative">
        <button
          className="absolute top-3 right-2 cursor-pointer"
          onClick={onClose}
        >
        ❌
        </button>
        <h2 className="text-blue-600 text-2xl font-bold mb-2">Edit Task</h2>
        <h4 className='text-orange-600 font-semibold text-xl' type=''>Title :</h4>
        <input
          type="text"
          className="border border-amber-900 w-full p-2 mb-4 rounded"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <h4 className='text-orange-600 font-semibold text-xl'>Description :</h4>
        <textarea
          className="border border-amber-900 w-full p-2 mb-2 rounded"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <h4 className='text-orange-600 font-semibold text-xl'>Priority :</h4>
        <select
          className="border border-amber-900 w-full p-2 mb-4 cursor-pointer rounded"
          value={form.priority}
          onChange={e => setForm({ ...form, priority: e.target.value })}
        >
          <option>Low 💤</option>
          <option>Medium ⚡</option>
          <option>High 🔥</option>
        </select>
        <h4 className='text-orange-600 font-semibold text-xl'>Status :</h4>
        <select
          className="border border-amber-900 w-full p-2 mb-2 cursor-pointer rounded"
          value={form.status}
          onChange={e => setForm({ ...form, status: e.target.value })}
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
       <div className='text-right'>
         <button
          className="bg-green-800 text-white text-right mt-2 px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
          onClick={handleSave}
        >
          Save
        </button>
       </div>
      </div>
    </div>
  );
}
