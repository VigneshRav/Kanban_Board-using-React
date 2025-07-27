import React, { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';
import TaskColumn from './TaskColumn';
import TaskForm from './TaskForm';
import { DragDropContext } from 'react-beautiful-dnd';

const statuses = ['To Do', 'In Progress', 'Done'];

export default function TaskBoard() {
  const { tasks, moveTask } = useContext(TaskContext);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    const srcStatus = source.droppableId;
    const destStatus = destination.droppableId;
    if (srcStatus === destStatus && source.index === destination.index) return;

    moveTask(draggableId, destStatus, destination.index);
  };

  return (
    <>
      <TaskForm />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {statuses.map(status => (
            <TaskColumn
              key={status}
              status={status}
              tasks={tasks.filter(t => t.status === status)}
            />
          ))}
        </div>
      </DragDropContext>
    </>
  );
}
