import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/actions';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.isDone;
    if (filter === 'incomplete') return !task.isDone;
    return true; 
  });

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => dispatch(setFilter('all'))}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Completed
        </button>
        <button
          onClick={() => dispatch(setFilter('incomplete'))}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Incomplete
        </button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
