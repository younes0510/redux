import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description) {
      const newTask = {
        id: Date.now(),
        description,
        isDone: false
      };
      dispatch(addTask(newTask));
      setDescription('');
    }
  };

  return (
    <div className="p-4 bg-gray-200 rounded-md">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded"
          placeholder="Enter a new task"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
