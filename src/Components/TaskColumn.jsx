import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

export default function TaskColumn({ status, tasks }) {
  return (
    <div className="border-2 border-cyan-800 flex-1 p-2 rounded shadow">
      <h2 className="underline text-xl font-serif text-pink-600 font-bold mb-2">
        {status}
      </h2>
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            className="min-h-[200px]"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, idx) => (
              <TaskCard key={task.id} task={task} index={idx} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
