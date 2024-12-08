import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <Provider store={store}>
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">To-Do List</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
