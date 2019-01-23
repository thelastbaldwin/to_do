// actions
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const MOVE_TASK = "MOVE_TASK";

// action creators
const addTaskAction = taskText => ({
  type: ADD_TASK,
  payload: taskText
});

const removeTaskAction = index => ({
  type: REMOVE_TASK,
  payload: index
});

const moveTaskAction = (index, newIndex) => ({
  type: MOVE_TASK,
  payload: {index, newIndex}
});

export {
  addTaskAction,
  removeTaskAction,
  moveTaskAction,
  ADD_TASK,
  REMOVE_TASK,
  MOVE_TASK
};
