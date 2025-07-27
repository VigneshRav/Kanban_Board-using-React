import React, { useState, useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskContext } from "../Context/TaskContext";
import TaskModal from "./TaskModal";

export default function TaskCard({ task, index }) {
  const [open, setOpen] = useState(false);
  const { deleteTask } = useContext(TaskContext);

  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(prov) => (
          <div
            className="bg-indigo-200 p-3 rounded mb-2 cursor-pointer hover:bg-indigo-300"
            {...prov.draggableProps}
            {...prov.dragHandleProps}
            ref={prov.innerRef}
          >
            <div className="flex justify-between">
              <h3 className="font-bold underline">{task.title}</h3>
              <h4 className="font-semibold">{task.priority}</h4>
            </div>
            <p className="text-sm">{task.description?.slice(0, 100)}</p>
            {task.tags && (
              <div className="mt-1 text-xs">{task.tags.join(", ")}</div>
            )}
            <div className="flex justify-between">
              <button
                className="text-blue-600 text-xs mt-2 cursor-pointer"
                onClick={() => setOpen(true)}
              >
                Edit
              </button>
              <button
                className="text-red-600 text-xs mt-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(task.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </Draggable>
      {open && <TaskModal task={task} onClose={() => setOpen(false)} />}
    </>
  );
}
