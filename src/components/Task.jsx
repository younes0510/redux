import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../store/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task:', task.description);
    if (newDescription) {
      dispatch(editTask({ ...task, description: newDescription }));
    }
  };

  return (
    <div className={`p-4 mb-2 rounded ${task.isDone ? 'bg-green-100' : 'bg-white'} shadow`}>
      <div className="flex justify-between">
        <div>
          <h3 className={`font-bold ${task.isDone ? 'line-through text-gray-500' : ''}`}>{task.description}</h3>
        </div>
        <div className="flex gap-2">
          <button onClick={handleToggle} className="p-2 bg-yellow-500 text-white rounded">
            {task.isDone ? 'Undo' : 'Done'}
          </button>
          <button onClick={handleEdit} className="p-2 bg-blue-500 text-white rounded">
            Edit
          </button>
          <button onClick={handleDelete} className="p-2 bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
