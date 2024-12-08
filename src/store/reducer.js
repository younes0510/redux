import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, EDIT_TASK, SET_FILTER } from './actions';

const initialState = {
  tasks: [],
  filter: 'all'
};

export const taskReducer = (state = initialState, action) => {
  if (action.type === ADD_TASK) {
    return { ...state, tasks: [...state.tasks, action.payload] };
  } else if (action.type === TOGGLE_TASK) {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      )
    };
  } else if (action.type === DELETE_TASK) {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload)
    };
  } else if (action.type === EDIT_TASK) {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      )
    };
  } else if (action.type === SET_FILTER) {
    return { ...state, filter: action.payload };
  } else {
    return state;
  }
};

